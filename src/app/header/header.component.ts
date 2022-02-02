import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Storing img src for navBar here
  src = "../../assets/cart.png"

  constructor() { }

  ngOnInit(): void {
  }

}
