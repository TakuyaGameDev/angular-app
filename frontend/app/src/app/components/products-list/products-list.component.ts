import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  items:Array<Product>;
  constructor(
    private productService: ProductsService,
    private router: Router,
    private localStorageService: LocalstorageService
  ) {
    let tmpItems = this.localStorageService.getProductList();
    if(!localStorage) {
      this.productService.getProductList().subscribe(res => {
        tmpItems = res.items;
        this.localStorageService.setProductList(res.items);
      });
    }
    this.items = JSON.parse(tmpItems);
  }
}
