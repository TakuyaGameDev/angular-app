import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SELECT_NAV_KIND } from 'src/app/consts';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  @Output() onClickSelectKind = new EventEmitter<number>();
  @Input() selectKind: number = 0;

  onClickSelect(value: number) {
    this.onClickSelectKind.emit(value);
  }

  get isProducts() {
    return this.selectKind === SELECT_NAV_KIND.PRODUCTS
      ? 'active'
      : '';
  }

  get isTest() {
    return this.selectKind === SELECT_NAV_KIND.TEST
      ? 'active'
      : '';
  }

  get isTest2() {
    return this.selectKind === SELECT_NAV_KIND.TEST2
      ? 'active'
      : '';
  }
}
