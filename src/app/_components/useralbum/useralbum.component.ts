import { Component, OnInit } from '@angular/core';
import { CommonserviveService } from 'src/app/_services/commonservive.service';
import {Router, ActivatedRoute} from "@angular/router"
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-useralbum',
  templateUrl: './useralbum.component.html',
  styleUrls: ['./useralbum.component.scss']
})
export class UseralbumComponent implements OnInit {

  user_albums:any
  user_id_from_query_param:any

  displayedColumns: string[] = [
    "id",
    "title",
  ];

  constructor(
    private services: CommonserviveService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.user_id_from_query_param = params['userid'];
  });
    this.get_user_album()
   }

  ngOnInit(): void {
  }


  get_user_album(){
    this.services.get_album_by_userid(this.user_id_from_query_param).subscribe(data => {
      // this.user_albums = data
      this.user_albums = new MatTableDataSource<any>(data)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.user_albums.filter = filterValue.trim().toLowerCase();
  }


  view_photo_click(album:any){
    let album_id = album.id;

    this.router.navigate(
      ['/albumphoto'],
      { queryParams: { albumid: album_id } }
    );
  }

}
