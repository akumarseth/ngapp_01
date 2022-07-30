import { Component, OnInit } from '@angular/core';
import { CommonserviveService } from 'src/app/_services/commonservive.service';
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-albumphoto',
  templateUrl: './albumphoto.component.html',
  styleUrls: ['./albumphoto.component.scss']
})
export class AlbumphotoComponent implements OnInit {

  album_photos:any
  album_id_from_query_param:any

  constructor(
    private services: CommonserviveService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.album_id_from_query_param = params['albumid'];
  });
    this.get_album_photo()
   }

  ngOnInit(): void {
  }


  get_album_photo(){
    this.services.get_photo_by_albumid(this.album_id_from_query_param).subscribe(data => {
      this.album_photos = data
      // console.log(data)
    });
  }
}
