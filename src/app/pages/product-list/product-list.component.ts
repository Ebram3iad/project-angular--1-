import { Component, OnInit } from '@angular/core';
import { ProductServService } from 'src/app/servcis/product-serv.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  public prductinfo=[];

  constructor(private productserv_:ProductServService) { }

  ngOnInit(): void {
    this.productserv_.getdata()
    .subscribe(data =>this.prductinfo =data);
      }

}
