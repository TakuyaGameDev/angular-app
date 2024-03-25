import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRes } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api:string = 'http://localhost:80';
  constructor(private http: HttpClient) { }

  getUsers(accountId:string,password:string) {
    return this.http.get<LoginRes>(this.api+'/api/login',
    {
      params: {
        account_id: accountId,
        password: password
      }
    });
  }
}
