import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRes } from '../types/user';
import { CONNECTION_API_STRING } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api:string = CONNECTION_API_STRING;
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
