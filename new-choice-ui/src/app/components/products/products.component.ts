import { Component, Input } from '@angular/core';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  carddata:any;
  carddata1:any;
  loaded:Boolean = false;
  // mobile:Boolean = false;
  @Input() open: Boolean=false;

  constructor(public productservice: ProductService){
    this.getAllEmployeeData();
    // var w = screen.width;
    // var h = screen.height;
  }

  getAllEmployeeData(){
    this.productservice.getAllProducts().subscribe((products:any) => {
      this.carddata=products;
      // console.log(products);
      this.loaded = true;
      // console.log(this.open);
      if(this.open){
        this.carddata1=[this.carddata[0],this.carddata[1],this.carddata[2],this.carddata[3],this.carddata[4],this.carddata[5],this.carddata[6],this.carddata[7]];
      }
      console.log(this.carddata1)
    })
  }
}
