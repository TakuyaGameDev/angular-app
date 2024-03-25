import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users:any = {};
  account_id:string = '';
  password:string = '';
  validationMsg = { account_id: '', password: '' };
  loginErrorMsg = '';
  onloading = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private localStorageService: LocalstorageService) {}

  resetMsg() {
    this.validationMsg['account_id'] = '';
    this.validationMsg['password'] = '';
    this.loginErrorMsg = '';
  }

  onChangeCheck() {
    this.resetMsg();
  }

  onSubmit(event: any): void {
    document.getElementById('account_input')?.blur();
    document.getElementById('password_input')?.blur();
    if (event.keyCode && event.keyCode !== 13) {
      return;
    }
    this.onLogin();
  }

  onLogin(){
    if(this.account_id === '') {
      this.validationMsg['account_id'] = '必須入力です';
    } else {
      this.validationMsg['account_id'] = '';
    }
    if(this.password === '') {
      this.validationMsg['password'] = '必須入力です';
    } else {
      this.validationMsg['password'] = '';
    }

    if(this.validationMsg['account_id'] !== '' || this.validationMsg['password'] !== '') {
      return;
    }
    this.onloading = true;
    this.loginService.getUsers(this.account_id,this.password).subscribe((res) => {
      if(!res.loginUser) {
        this.loginErrorMsg = '該当ユーザが存在しません。再度お試しください。';
        this.onloading = false;
        return;
      } else {
        this.onloading = false;
        this.localStorageService.setLoginUser(res.loginUser);
        this.router.navigate(['/main']);
      }
    })
  }

  get checkLoading() {
    return this.onloading
      ? 'disabled'
      : '';
  }
}
