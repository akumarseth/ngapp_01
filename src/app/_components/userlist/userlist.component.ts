import { Component, OnInit } from '@angular/core';
import { CommonserviveService } from 'src/app/_services/commonservive.service';
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router"


export enum SelectType {
  single,
  multiple
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  user_data: any
  isrowselected: boolean = false
  usersearch_model: any

  displayedColumns: string[] = [
    "select",
    "id",
    "name",
    "username",
    "email",
    "phone",
    "website",
  ];

  selectType = [
    { text: "Single", value: SelectType.single },
    { text: "Multiple", value: SelectType.multiple }
  ];

  selection = new SelectionModel<any>(true, []);
  displayType = SelectType.single;

  constructor(
    private services: CommonserviveService,
    private router: Router
  ) {
    this.get_users_data()
  }

  ngOnInit(): void {
  }

  get_users_data() {
    this.services.get_users().subscribe(data => {
      this.user_data = new MatTableDataSource<any>(data)
    });
  }

  selectHandler(row: any) {
    if (this.displayType == SelectType.single) {
      if (!this.selection.isSelected(row)) {
        this.selection.clear();
        this.isrowselected = true;
      }
      else {
        this.isrowselected = false;
      }
    }
    this.selection.toggle(row);
  }

  // onChange(typeValue: number) {
  //   this.displayType = typeValue;
  //   this.selection.clear();
  // }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.user_data.filter = filterValue.trim().toLowerCase();
  }


  click_button(name: any) {
    let selected_user_id = this.selection.selected[0].id;

    if (name == "Post") {
      // this.router.navigate([`/userpost/{selected_user_id}`])
      this.router.navigate(
        ['/userpost'],
        { queryParams: { userid: selected_user_id } }
      );
    }
    else if (name == "Album") {
      this.router.navigate(
        ['/useralbum'],
        { queryParams: { userid: selected_user_id } }
      );
    }
    else if (name == "Todo") {
      this.router.navigate(
        ['/usertodo'],
        { queryParams: { userid: selected_user_id } }
      );
    }
  }
}
