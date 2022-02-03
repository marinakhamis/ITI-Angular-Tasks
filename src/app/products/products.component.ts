import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../shared-classes-and-types/discount-offers';
import { IProduct } from './../shared-classes-and-types/iproducts';
import { ICategory } from './../shared-classes-and-types/icategory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount!:DiscountOffers;
  storeName!:string;
  storeLogo!:string;
  ProductList!: IProduct[];
  CategoryList!:ICategory[];
  ClientName!:string;
  IsPurshased!:boolean;


  constructor() {
    this.Discount = DiscountOffers.ten; // Diplays the Sale div
    // this.Discount = DiscountOffers.NoDiscount; // Hides the sale div
    // this.Discount;
    this.storeName = "Amazon";
    this.storeLogo = "https://img.icons8.com/color/48/000000/amazon.png";
    this.ProductList = [{ID: 1, Name: "PC", Quantity: 25, Price: 500, Img: ""}];
    this.CategoryList = [{ID: 1, Name: "Electronics" }]
  }

  fullName:string="Default value";
  ngOnInit(): void {
  }

  logData(data:any){
    console.log(data)
  }

}
