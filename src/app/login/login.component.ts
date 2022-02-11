import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup} from '@angular/forms';
import { EnrollService } from '../Services/enroll.service';
import { LoginData } from '../shared-classes-and-types/login-data';
import { forbiddenNameValidator } from 'uName.validator copy';
import { cPasswordValidator } from './../../../cPassword.validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private enroll:EnrollService, private fb: FormBuilder) { }
  loginForm = this.fb.group(
    {
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          forbiddenNameValidator(/admin/),
        ],
      ],
      password: [''],
      cPassword: [''],
      // address: this.fb.group({
      //   state: [''],
      //   city: [''],
      //   postalCode: [''],
      // }),
    },
    { validator: [cPasswordValidator] }
  );
  
  loginModel:LoginData= new LoginData("marina@gmail.com", "****");
  ngOnInit(): void { }
onSumbit(){
  this.enroll.enroll(this.loginModel).subscribe(res=>{
    console.log("success", res)
  }, error=>{
    console.log("error", error)
  })
}

get email(){
  return this.loginModel.get('email');
}
get password(){
  return this.loginModel.get('password');
}
}
