import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './_components/userlist/userlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './_common/navigation/navigation.component';
import { AlbumlistComponent } from './_components/albumlist/albumlist.component';
import { PostlistComponent } from './_components/postlist/postlist.component';
import { TodolistComponent } from './_components/todolist/todolist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserpostComponent } from './_components/userpost/userpost.component';
import { UseralbumComponent } from './_components/useralbum/useralbum.component';
import { UsertodoComponent } from './_components/usertodo/usertodo.component';
import { PostcommentComponent } from './_components/postcomment/postcomment.component';
import { AlbumphotoComponent } from './_components/albumphoto/albumphoto.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    NavigationComponent,
    AlbumlistComponent,
    PostlistComponent,
    TodolistComponent,
    UserpostComponent,
    UseralbumComponent,
    UsertodoComponent,
    PostcommentComponent,
    AlbumphotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
