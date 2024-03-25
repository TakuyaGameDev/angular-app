import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  loginUser: any = {};
  constructor(private localStorageService: LocalstorageService){
    // localstorage空取得したデータをオブジェクトに直すため、JSON.parseをしている
    this.loginUser = JSON.parse(this.localStorageService.getLoginUser());
  };
}
