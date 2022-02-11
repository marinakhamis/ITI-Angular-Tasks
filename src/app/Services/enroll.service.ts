import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from './../shared-classes/login-data';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http:HttpClient) { }
  _url="";
  enroll(data:LoginData){
    return this.http.post(this._url,data)
  }
}
