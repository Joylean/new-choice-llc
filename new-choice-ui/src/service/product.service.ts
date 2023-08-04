import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private httpClient:HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    console.log(this.baseApiUrl);
    return this.httpClient.get<Product[]>(this.baseApiUrl + '/api/products');
  }

  addProduct(addProduct: Product):Observable<Product[]> {
    return this.httpClient.post<Product[]>(this.baseApiUrl + '/api/products',addProduct);
  }

  getProduct(id: number):Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseApiUrl+'/api/products/'+id);
  }

  updateProduct(id: number, updateProduct:Product):Observable<Product[]> {
    return this.httpClient.put<Product[]>(this.baseApiUrl+'/api/products/'+id,updateProduct);
  }

  deleteProduct(id: number):Observable<Product[]> {
    return this.httpClient.delete<Product[]>(this.baseApiUrl+'/api/products/'+id);
  }
}
