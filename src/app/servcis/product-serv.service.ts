import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServService {
 private url_: string ="assets/data/data-base.json";
  constructor(private http:HttpClient) { }

  getdata() :Observable<Iproduct[]>{
 return this.http.get<Iproduct[]>(this.url_);

  }
}
