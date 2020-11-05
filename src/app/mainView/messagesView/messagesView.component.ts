import { Component , Input } from '@angular/core';

@Component({
  selector: 'messages-view',
  templateUrl: './messagesView.component.html',
  styleUrls: ['./messagesView.component.css']
})
export class MessagesViewComponent {
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
