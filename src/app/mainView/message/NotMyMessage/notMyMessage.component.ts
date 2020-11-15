import { Component, Input } from '@angular/core';

@Component({
  selector: 'notMyMessage',
  templateUrl: './notMyMessage.component.html',
  styleUrls: ['./notMyMessage.component.css']
})

export class NotMyMessageComponent {

  @Input() text: string;
  @Input() clientID : number;
}
