import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from '../app/products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Amazon';
  @ViewChild(ProductsComponent) child!: ProductsComponent;
  showProducts(){
    this.child.renderValues();
  }

  toggleProducts(){
    this.child.buyProduct();
  }
}


