import { Component, OnInit } from '@angular/core';
import { Animations } from './animations'
import { SignalRService } from './services/signalr.service';
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

  toggleMenu(value) {
    this.showMenu = value;
  }

  constructor(public signalRService: SignalRService, private http: HttpClient) { }

  ngOnInit() {
    this.signalRService.startConnection();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.http.get('https://localhost:5001/api/chat')
      .subscribe(res => {
        console.log(res);
  
      })
  }
}
