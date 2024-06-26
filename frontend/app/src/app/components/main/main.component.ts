import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SELECT_NAV_KIND } from 'src/app/consts';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  loginUser: any = {};
  selectKind: number = SELECT_NAV_KIND.PRODUCTS;
  constructor(private localStorageService: LocalstorageService,private router: Router){
    // localstorageから取得したデータをオブジェクトに直すため、JSON.parseをしている
    this.loginUser = JSON.parse(this.localStorageService.getLoginUser());
    if(!this.loginUser) {
      alert('ログインし直して再度お試しください');
      this.router.navigate(['/']);
    }
  };

  onChangeSelectKind(kind: number) {
    this.selectKind = kind;
  }
}
