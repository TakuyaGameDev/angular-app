import { Injectable } from '@angular/core';
import { CONNECTION_API_STRING } from '../consts';
import { HttpClient } from '@angular/common/http';
import { ProductRes } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api:string = CONNECTION_API_STRING;
  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get<ProductRes>(this.api+'/api/getProductList');
  }
}
