import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ProducDetailsComponent } from './pages/produc-details/produc-details.component';
import { AddProductComponent } from './pages/add-product/add-product.component';


const routes: Routes = 
[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'about', component:AboutComponent},
  {path: 'details', component:ProducDetailsComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:"**", component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

