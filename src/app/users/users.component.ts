import { Component, OnInit } from '@angular/core';
import { UsersService } from './../Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList:any;
  errorMsg:any;
  // usersArr: Array<any>;
  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      users =>
      {
      this.usersList=users;
    },
    error=>{
      this.errorMsg=error;
    })
  }

}
