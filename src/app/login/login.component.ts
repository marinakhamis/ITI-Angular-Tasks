import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';
import { LoginData } from '../shared-classes-and-types/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private enroll:EnrollService) { }
  loginModel:LoginData= new LoginData("marina@gmail.com", "****");
  ngOnInit(): void {
  }
onSumbit(){
  this.enroll.enroll(this.loginModel).subscribe(res=>{
    console.log("success", res)
  }, error=>{
    console.log("error", error)
  })
}
}
