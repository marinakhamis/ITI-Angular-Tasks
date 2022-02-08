import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,Observable, throwError } from 'rxjs';
import { IUsers } from './../shared-classes-and-types/iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  _url:string="https://jsonplaceholder.typicode.com/users/";
  getUsers():Observable<IUsers[]>
  {
    return this.http.get<IUsers[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"Server error")
    }))
  }
}