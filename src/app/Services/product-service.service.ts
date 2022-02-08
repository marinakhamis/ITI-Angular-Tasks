import { Injectable } from '@angular/core';
import { IProduct } from '../shared-classes-and-types/iproducts';


@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

    getAllProducts(): IProduct[]{
      return [
        { ID: 1, Name: "PC", Quantity: 3000, Price: 5000, Img: "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-pc-computer-xnimrodx-lineal-color-xnimrodx.png" },
        { ID: 2, Name: "Headphone", Quantity: 200, Price: 250, Img: "https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-headphone-devices-icongeek26-flat-icongeek26-1.png" },
        { ID: 3, Name: "Keyboard", Quantity: 254, Price: 30, Img: "https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-keyboard-electronic-devices-kmg-design-outline-color-kmg-design.png" },
        { ID: 4, Name: "VR Glasses", Quantity: 2, Price: 500, Img: "https://img.icons8.com/cute-clipart/64/000000/virtual-reality.png" }
      ];
    }

  getProductById(prodId:number){
    let products = this.getAllProducts();
    for(let prod of products){
      if(prod.ID == prodId){
        return prod
      };
    }
    return null;
  }
}
