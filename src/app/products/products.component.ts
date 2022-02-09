import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../shared-classes-and-types/discount-offers';
import { IProduct } from './../shared-classes-and-types/iproducts';
import { ICategory } from './../shared-classes-and-types/icategory';
import {ProductServiceService} from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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


  constructor(public productService: ProductServiceService, private router:Router,private activatedRoute: ActivatedRoute) {
    this.productService = productService;
    this.ProductList = this.renderValues();
    this.Discount = DiscountOffers.ten; // Diplays the Sale div
    this.storeName = "Amazon";
    this.storeLogo = "https://img.icons8.com/color/48/000000/amazon.png";
    this.CategoryList = [
      { ID: 1, Name: "Electronics" },
      { ID: 2, Name: "Computers" },
      { ID: 3, Name: "Smart home" },
      { ID: 4, Name: "Arts & Crafts" }
    ];
    this.ClientName= "Marina";
    this.IsPurchased = false;
  }
  discountProd(){
    this.router.navigate(['discount-products'],{relativeTo:this.activatedRoute})
  }

  noDiscountProd(){
    this.router.navigate(['no-discount-products'],{relativeTo:this.activatedRoute})
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
