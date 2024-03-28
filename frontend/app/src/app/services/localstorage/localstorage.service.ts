import { Injectable } from '@angular/core';
import { Product } from 'src/app/types/product';
import { User } from 'src/app/types/user';

const STORAGE_KEY_LOGIN_USER = 'loginUser';
const STORAGE_KEY_PRODUCT_LIST = 'productList';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  loginUser: User = {
    id: 0,
    name: '',
    account_id: ''
  };

  productList: Array<Product> = [];

  constructor() { }

  setLoginUser(loginUser: User) {
    this.loginUser = loginUser;
    localStorage.setItem(STORAGE_KEY_LOGIN_USER,JSON.stringify(this.loginUser));
  }

  getLoginUser(): any {
    return localStorage.getItem(STORAGE_KEY_LOGIN_USER);
  }

  removeLoginUser(): void {
    localStorage.removeItem(STORAGE_KEY_LOGIN_USER);
  }

  setProductList(products: Product[]): void {
    this.productList = products;
    localStorage.setItem(STORAGE_KEY_PRODUCT_LIST,JSON.stringify(this.productList));
  }

  getProductList(): any {
    return localStorage.getItem(STORAGE_KEY_PRODUCT_LIST);
  }

  removeProductList(): void {
    localStorage.removeItem(STORAGE_KEY_PRODUCT_LIST);
  }
}
