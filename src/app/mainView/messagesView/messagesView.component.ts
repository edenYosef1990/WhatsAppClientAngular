import { Component , Input } from '@angular/core';
import { SignalRService } from 'src/app/services/signalr.service';

@Component({
  selector: 'messages-view',
  templateUrl: './messagesView.component.html',
  styleUrls: ['./messagesView.component.css']
})
export class MessagesViewComponent {
  myName: string = "eden";
  texts: Array<String>;

  constructor(public signalRService: SignalRService) {
    this.texts = new Array<String>();
    this.signalRService.newMessageEvent.subscribe(msg => this.texts.push(msg.text));
  }
}
