import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title="angularテストサイト";
  loginUser: any = {};
  constructor(private router: Router, private localStorageService: LocalstorageService){
    this.loginUser = JSON.parse(this.localStorageService.getLoginUser());
  }

  onClickLogout() {
    this.localStorageService.removeLoginUser();
    this.router.navigate(['/']);
  }
}
