import { Component , Input } from '@angular/core';
import { messageModel } from 'src/app/interfaces/messageModel.model';
import { SignalRService } from 'src/app/services/signalr.service';
import { WhatsappMessages } from 'src/app/services/WhatsappMessages.service';

@Component({
  selector: 'messages-view',
  templateUrl: './messagesView.component.html',
  styleUrls: ['./messagesView.component.css']
})
export class MessagesViewComponent {
  myName: string = "eden";
  messages: Array<messageModel>;

  constructor(public whatsappMessage : WhatsappMessages) {
    this.messages = new Array<messageModel>();
    this.whatsappMessage.newMessageEvent.subscribe(msg => this.messages.push(msg));
  }

  IsMyMessage(msgID : number) : boolean {
    console.log("msg number: "+msgID+ " and my number is : "+this.whatsappMessage.clientID);
    return (msgID == this.whatsappMessage.clientID);
  }
}
