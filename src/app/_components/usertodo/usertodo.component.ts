import { Component, OnInit } from '@angular/core';
import { CommonserviveService } from 'src/app/_services/commonservive.service';
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-usertodo',
  templateUrl: './usertodo.component.html',
  styleUrls: ['./usertodo.component.scss']
})
export class UsertodoComponent implements OnInit {

  user_todos:any
  user_id_from_query_param:any

  constructor(
    private services: CommonserviveService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.user_id_from_query_param = params['userid'];
  });
    this.get_user_todo()
   }

  ngOnInit(): void {
  }


  get_user_todo(){
    this.services.get_todo_by_userid(this.user_id_from_query_param).subscribe(data => {
      this.user_todos = data;
      console.log(data)
    });
  }

}
