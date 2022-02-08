import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,Observable, throwError } from 'rxjs';
import { IPosts } from './../shared-classes-and-types/iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  _url:string="https://jsonplaceholder.typicode.com/posts/";
  getposts():Observable<IPosts[]>
  {
    return this.http.get<IPosts[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"Server error")
    }))
  }

}
