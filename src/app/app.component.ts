import { Component, OnInit } from '@angular/core';
import { Animations } from './animations'
import { SignalRService } from './services/signalr.service';
import { WhatsappMessages } from './services/WhatsappMessages.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [Animations.animeMainViewTrigger, Animations.animeSideBarTrigger]
})
export class AppComponent implements OnInit {
  showMenu: boolean = true;
  title = 'WhatsappClient';
  clientID : number;

  toggleMenu(value) {
    this.showMenu = value;
  }

  constructor(public whatsappMessages : WhatsappMessages) { }

  ngOnInit() {
    this.whatsappMessages.Connect();
  }


}
