import { Component, OnInit } from '@angular/core';
import { ApiProduct } from 'src/app/ViewModels/Api/apiProduct/api-product';
import { ProductsService } from 'src/app/servcis/Api/product/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList:ApiProduct[];
  
  constructor(private _productSrevice:ProductsService , private _rout:Router) { }

  ngOnInit(): void {
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

  onDelete(id:number){
    this._productSrevice.DeleteProduct(id).subscribe(
      product=>{
        this._rout.navigate(['products']);
      }
    );
  }

}
