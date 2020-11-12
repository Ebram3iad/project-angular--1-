import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/servcis/Api/product/products.service';
import { ApiProduct } from 'src/app/ViewModels/Api/apiProduct/api-product';
import { CategoriesService } from 'src/app/servcis/Api/category/categories.service';
import { Category } from 'src/app/ViewModels/Api/apiCategory/category';
import { ApiSupplier } from 'src/app/ViewModels/Api/apiSupplier/api-supplier';
import { SuppliersService } from 'src/app/servcis/Api/supplier/suppliers.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product:ApiProduct;
  selectedCategoryId:number;
  categories:Category[];
  suppliers:ApiSupplier[];

  constructor(private _productservice:ProductsService, private _categoryService:CategoriesService , private _supplierService:SuppliersService, private _rout:Router) { }

  ngOnInit(): void {
    this.product=new ApiProduct();
    this._categoryService.GetCategories().subscribe(
      (response)=>{
        this.categories=response;
      }
    );
    this._supplierService.GetSuppliers().subscribe(
      (Response)=>{
        this.suppliers=Response;
      }
    );
  }

  FormSubmit(){
    this._productservice.CreateProduct(this.product).subscribe(
      product=>{
        this._rout.navigate(['products']);
      }
    );
  }

}
