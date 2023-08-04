import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  carddata:any;
  loaded:Boolean = false;
  constructor(public productservice: ProductService){
    this.getAllEmployeeData();
  }

  getAllEmployeeData(){
    this.productservice.getAllProducts().subscribe((products:any) => {
      this.carddata=products;
      console.log(products);
      this.loaded = true;
    })
  }

  // drop(event: CdkDragDrop<any>) {
  //   if(event.previousContainer!==event.container){
  //     transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
  //   }else{
  //     moveItemInArray(this.carddata, event.previousIndex, event.currentIndex);
  //   }
  // }
}
