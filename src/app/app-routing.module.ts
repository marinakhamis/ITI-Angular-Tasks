import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes =
  [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'posts', component: PostsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
