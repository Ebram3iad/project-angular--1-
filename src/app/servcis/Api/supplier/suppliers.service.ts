import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/ViewModels/Api/apiCategory/category';
import { ApiSupplier } from 'src/app/ViewModels/Api/apiSupplier/api-supplier';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private _http:HttpClient) { }

  GetSuppliers():Observable<ApiSupplier[]>{
    let apiUrl=environment.apiUrl;
    return this._http.get<any>(`${apiUrl}/Suppliers`);
  }

  CreateSupplier(newCategory:ApiSupplier):Observable<ApiSupplier>{
    let apiUrl=environment.apiUrl;
    const httpOptions=new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'*/*'
      // can also takes another parameter of access tokens that is used in authorizations
      //'Authorization':'any authorized token'
    });

    return this._http.post<ApiSupplier>(
      `${apiUrl}/Supplier/CreateSupplier`,
       newCategory
      //{headers:httpOptions}
      );
  }

  DeleteSupplier(id:number):Observable<ApiSupplier>{
    let apiUrl=environment.apiUrl;
    return this._http.delete<ApiSupplier>(
      `${apiUrl}/Supplier/DeleteSupplier/${id}`
    );
  }

}
