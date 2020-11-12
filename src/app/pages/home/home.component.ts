import { Component, OnInit } from '@angular/core';
import { ApiProduct } from 'src/app/ViewModels/Api/apiProduct/api-product';
import { ProductsService } from 'src/app/servcis/Api/product/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList:ApiProduct[];
  isBuyed:boolean;
  totalPrice:number;
  numberOfBuyedProducts:number;

  constructor(private _productSrevice:ProductsService) { }

  ngOnInit(): void {
    this.isBuyed=false;
    this.totalPrice=0;
    this.numberOfBuyedProducts=1;
    this._productSrevice.GetProducts().subscribe(
      (response)=>{
        //console.log(response);
        this.productList=response;
      }
      ,
      (error)=>{
        console.log(error);
      }
    );
  }

  onBuy(price:number){
    this.totalPrice+= (price*this.numberOfBuyedProducts);
  }

  Clear(Price:number){
    if(this.totalPrice>=Price){
      this.totalPrice -= Price*this.numberOfBuyedProducts;
    }
  }

  onfinishbuying(){
    this.isBuyed = !this.isBuyed;
  }

}
