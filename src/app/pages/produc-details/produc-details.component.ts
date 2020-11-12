import { Component, OnInit, EventEmitter, ElementRef, Output, ViewChild,} from '@angular/core';
import { ProductServService } from 'src/app/servcis/product-serv.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-produc-details',
  templateUrl: './produc-details.component.html',
  styleUrls: ['./produc-details.component.scss']
})
export class ProducDetailsComponent implements OnInit {
  @Output('TotalPrice')  Tprice=new EventEmitter();
  @ViewChild('Item') Item:ElementRef;
public prductinfo=[];

  constructor( private productserv_:ProductServService,private location:Location) { }

  ngOnInit(): void {
this.productserv_.getdata()
.subscribe(data =>this.prductinfo =data);
  }

  FireEvent(Price){
    this.Tprice.emit(Price);
  }

  goback(){
    this.location.back();
  }
  




}
