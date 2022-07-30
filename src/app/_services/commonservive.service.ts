import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonserviveService {

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  get_users(): Observable<any> {
    return this.http
      .get<any>(environment.base_url + 'users')
      .pipe(retry(1), catchError(this.handleError));
  }

  get_posts(): Observable<any> {
    return this.http
      .get<any>(environment.base_url + 'posts')
      .pipe(retry(1), catchError(this.handleError));
  }

  get_post_by_id(id:any): Observable<any> {
    return this.http
      .get<any>(environment.base_url + "posts/" + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  get_post_by_userid(userid:any): Observable<any> {
    return this.http
      .get<any>(environment.base_url + "posts?userId=" + userid)
      .pipe(retry(1), catchError(this.handleError));
  }

  get_albums(): Observable<any> {
    return this.http
      .get<any>(environment.base_url + 'albums')
      .pipe(retry(1), catchError(this.handleError));
  }

  get_album_by_userid(userid:any): Observable<any> {
    return this.http
      .get<any>(environment.base_url + "albums?userId=" + userid)
      .pipe(retry(1), catchError(this.handleError));
  }


  get_todos(): Observable<any> {
    return this.http
      .get<any>(environment.base_url + 'todos')
      .pipe(retry(1), catchError(this.handleError));
  }

  get_todo_by_userid(userid:any): Observable<any> {
    return this.http
      .get<any>(environment.base_url + "todos?userId=" + userid)
      .pipe(retry(1), catchError(this.handleError));
  }

  get_comments(): Observable<any> {
    return this.http
      .get<any>(environment.base_url + 'comments')
      .pipe(retry(1), catchError(this.handleError));
  }

  get_comment_by_postid(postid:any): Observable<any> {
    return this.http
      .get<any>(environment.base_url + "comments?postId=" + postid)
      .pipe(retry(1), catchError(this.handleError));
  }

  get_photos(): Observable<any> {
    return this.http
      .get<any>(environment.base_url + 'photos')
      .pipe(retry(1), catchError(this.handleError));
  }


  get_photo_by_albumid(albumid:any): Observable<any> {
    return this.http
      .get<any>(environment.base_url + "photos?albumId=" + albumid)
      .pipe(retry(1), catchError(this.handleError));
  }
}
