import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiProduct } from 'src/app/ViewModels/Api/apiProduct/api-product';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private _http:HttpClient) { }

  GetProducts():Observable<ApiProduct[]>{
    let apiUrl=environment.apiUrl;
    return this._http.get<any>(`${apiUrl}/Products`);
  }

  CreateProduct(newProduct:ApiProduct):Observable<ApiProduct>{
    let apiUrl=environment.apiUrl;
    const httpOptions=new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'*/*'
      // can also takes another parameter of access tokens that is used in authorizations
      //'Authorization':'any authorized token'
    });

    return this._http.post<ApiProduct>(
      `${apiUrl}/Product/CreateProduct`,
      newProduct
      //{headers:httpOptions}
      );
  }

  DeleteProduct(id:number):Observable<ApiProduct>{
    let apiUrl=environment.apiUrl;
    return this._http.delete<ApiProduct>(
      `${apiUrl}/Product/DeleteProduct/${id}`
    );
  }
}
