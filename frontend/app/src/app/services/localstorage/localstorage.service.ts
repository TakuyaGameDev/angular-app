import { Injectable } from '@angular/core';
import { User } from 'src/app/types/user';

const STORAGE_KEY_LOGIN_USER = 'loginUser';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  loginUser: User = {
    id: 0,
    name: '',
    account_id: ''
  };

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
}
