import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../shared-classes-and-types/discount-offers';
import { IProduct } from './../shared-classes-and-types/iproducts';
import { ICategory } from './../shared-classes-and-types/icategory';
import {ProductServiceService} from '../Services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount!: DiscountOffers;
  storeName!: string;
  storeLogo!: string;
  ProductList!: IProduct[];
  CategoryList!: ICategory[];
  ClientName!: string;
  IsPurchased!: boolean;


  constructor(public productService: ProductServiceService) {
    this.productService = productService;
    this.ProductList = this.renderValues();
    this.Discount = DiscountOffers.ten; // Diplays the Sale div
    // this.Discount = DiscountOffers.NoDiscount; // Hides the sale div
    // this.Discount;
    this.storeName = "Amazon";
    this.storeLogo = "https://img.icons8.com/color/48/000000/amazon.png";
    // this.ProductList = [
    //   { ID: 1, Name: "PC", Quantity: 3000, Price: 5000, Img: "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-pc-computer-xnimrodx-lineal-color-xnimrodx.png" },
    //   { ID: 2, Name: "Headphone", Quantity: 200, Price: 250, Img: "https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-headphone-devices-icongeek26-flat-icongeek26-1.png" },
    //   { ID: 3, Name: "Keyboard", Quantity: 254, Price: 30, Img: "https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-keyboard-electronic-devices-kmg-design-outline-color-kmg-design.png" },
    //   { ID: 4, Name: "VR Glasses", Quantity: 2, Price: 500, Img: "https://img.icons8.com/cute-clipart/64/000000/virtual-reality.png" }
    // ];
    this.CategoryList = [
      { ID: 1, Name: "Electronics" },
      { ID: 2, Name: "Computers" },
      { ID: 3, Name: "Smart home" },
      { ID: 4, Name: "Arts & Crafts" }
    ];
    this.ClientName= "Marina";
    this.IsPurchased = false;
  }

  ngOnInit(): void {
   // this.ProductList = this.productService.getAllProducts();
  }

  renderValues() {
    return this.productService.getAllProducts();
  }
  buyProduct(){
    //Without toggeling
   // this.IsPurchased = true;
   // With toggling
  this.IsPurchased = !this.IsPurchased;
  }

}
