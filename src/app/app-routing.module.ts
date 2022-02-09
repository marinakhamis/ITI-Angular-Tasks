import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { DiscountProductsComponent } from './products/discount-products/discount-products.component';
import { NoDiscountProductsComponent } from './products/no-discount-products/no-discount-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes =
  [
    {path:'', redirectTo:'/home',pathMatch:'full'},
    { path: 'home', component:HomeComponent },
    { path: 'users', component:UsersComponent },
    { path: 'products', component:ProductsComponent, children:[
      { path: 'discount-products', component:DiscountProductsComponent },
      { path: 'no-discount-products', component:NoDiscountProductsComponent }
    ]},
    { path: 'posts', component:PostsComponent },
    { path: 'login', component:LoginComponent },
    { path: 'register', component:RegisterComponent },
    { path: '**', component:PageNotFoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
