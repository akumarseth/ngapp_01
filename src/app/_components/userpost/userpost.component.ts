import { Component, OnInit } from '@angular/core';
import { CommonserviveService } from 'src/app/_services/commonservive.service';
import {Router, ActivatedRoute} from "@angular/router"
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.scss']
})
export class UserpostComponent implements OnInit {

  user_posts:any
  user_id_from_query_param:any


  displayedColumns: string[] = [
    "id",
    "title",
    "body",
  ];

  constructor(
    private services: CommonserviveService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.user_id_from_query_param = params['userid'];
  });
    this.get_user_post()
   }

  ngOnInit(): void {
  }

  get_user_post(){
    this.services.get_post_by_userid(this.user_id_from_query_param).subscribe(data => {
      // this.user_posts = data
      console.log(data)
      this.user_posts = new MatTableDataSource<any>(data)
    });
  }

  view_comment_click(post:any){
    console.log(post)
    let post_id = post.id;

    this.router.navigate(
      ['/postcomment'],
      { queryParams: { postid: post_id } }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.user_posts.filter = filterValue.trim().toLowerCase();
  }

}
