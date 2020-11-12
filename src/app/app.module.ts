import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ProducDetailsComponent } from './pages/produc-details/produc-details.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    PageNotFoundComponent,
    AboutComponent,
    ProducDetailsComponent,
    ProductListComponent,
    AddProductComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
