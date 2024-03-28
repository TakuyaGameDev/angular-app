import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displayviewer',
  templateUrl: './displayviewer.component.html',
  styleUrls: ['./displayviewer.component.scss']
})
export class DisplayviewerComponent {
  @Input() selectKind: number = 0;

  
}
