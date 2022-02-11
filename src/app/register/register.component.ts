import { Component, OnInit } from '@angular/core';
import { RegisterData } from '../shared-classes-and-types/register-data';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registerModel:RegisterData= new RegisterData("Marina","****","****", "m@gmail.com", "111", "1-1-99", "FB"
    );

  ngOnInit(): void {
  }

}
