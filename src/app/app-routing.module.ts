import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  UserlistComponent,
  PostlistComponent,
  AlbumlistComponent,
  TodolistComponent,
  UserpostComponent,
  UseralbumComponent,
  UsertodoComponent,
  PostcommentComponent,
  AlbumphotoComponent,
} from './_components';

const routes: Routes = [
  {
    path: "",
    component: UserlistComponent,
    data: {
      breadcrumb: "Users"
    }
  },
  {
    path: "users",
    component: UserlistComponent,
    data: {
      breadcrumb: "Users"
    }
  },
  {
    path: "posts",
    component: PostlistComponent,
    data: {
      breadcrumb: "Posts"
    }
  },
  {
    path: "albums",
    component: AlbumlistComponent,
    data: {
      breadcrumb: "Albums"
    }
  },
  {
    path: "todos",
    component: TodolistComponent,
    data: {
      breadcrumb: "Todos"
    }
  },
  {
    path: "userpost",
    component: UserpostComponent,
    data: {
      breadcrumb: "Post"
    }
  },
  {
    path: "useralbum",
    component: UseralbumComponent,
    data: {
      breadcrumb: "Album"
    }
  },
  {
    path: "usertodo",
    component: UsertodoComponent,
    data: {
      breadcrumb: "ToDo"
    }
  },
  {
    path: "postcomment",
    component: PostcommentComponent,
    data: {
      breadcrumb: "PostComment"
    }
  },
  {
    path: "albumphoto",
    component: AlbumphotoComponent,
    data: {
      breadcrumb: "AlbumPhoto"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
