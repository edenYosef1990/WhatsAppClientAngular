import { Component } from '@angular/core';

@Component({
  selector: 'main-view',
  templateUrl: './mainView.component.html',
  styleUrls: ['./mainView.component.css']
})
export class MainViewComponent {
  myName: string = "eden";
  texts: Array<String>;

  constructor() {
    this.texts = new Array<String>();
    this.texts.push("היי");
    this.texts.push("מה שלומך");
    this.texts.push("בדיקה");
    this.texts.push("בדיקה 12");
    this.texts.push("עוד בדיקה");
  }
}
