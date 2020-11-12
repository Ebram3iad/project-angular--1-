import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/ViewModels/Api/apiCategory/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http:HttpClient) { }

  GetCategories():Observable<Category[]>{
    let apiUrl=environment.apiUrl;
    return this._http.get<any>(`${apiUrl}/Category`);
  }

  CreateCategory(newCategory:Category):Observable<Category>{
    let apiUrl=environment.apiUrl;
    const httpOptions=new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'*/*'
      // can also takes another parameter of access tokens that is used in authorizations
      //'Authorization':'any authorized token'
    });

    return this._http.post<Category>(
      `${apiUrl}/Category/CreateCategory`,
       newCategory
      //{headers:httpOptions}
      );
  }

  DeleteCategory(id:number):Observable<Category>{
    let apiUrl=environment.apiUrl;
    return this._http.delete<Category>(
      `${apiUrl}/Category/DeleteCategory/${id}`
    );
  }
}
