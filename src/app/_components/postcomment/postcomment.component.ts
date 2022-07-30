import { Component, OnInit } from '@angular/core';
import { CommonserviveService } from 'src/app/_services/commonservive.service';
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-postcomment',
  templateUrl: './postcomment.component.html',
  styleUrls: ['./postcomment.component.scss']
})
export class PostcommentComponent implements OnInit {

  post_details:any
  post_comments:any
  post_id_from_query_param:any

  constructor(
    private services: CommonserviveService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.post_id_from_query_param = params['postid'];
  });
    this.get_post_details()
   }

  ngOnInit(): void {
  }

  get_post_details(){
    this.services.get_post_by_id(this.post_id_from_query_param).subscribe(data => {
      this.post_details = data;

      // console.log(data)

      this.get_post_comments();
    });
  }

  get_post_comments(){
    this.services.get_comment_by_postid(this.post_id_from_query_param).subscribe(data => {
      this.post_comments = data
      console.log(data)
    });
  }

}
