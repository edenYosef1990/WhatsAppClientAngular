import { EventEmitter, Injectable} from '@angular/core';
import { SignalRService} from './signalr.service'
import { HttpClient } from '@angular/common/http';
import { messageModel } from '../interfaces/messageModel.model';


@Injectable({
  providedIn: 'root'
})

export class WhatsappMessages {

    public clientID : number = -1;
    public newMessageEvent : EventEmitter<messageModel> = new EventEmitter();

    constructor(public signalRService: SignalRService, private http: HttpClient){
    }

// a great read about promises / async in javascript : https://blog.logrocket.com/async-await-in-typescript/

    public async Connect() : Promise<void> {
        this.startHttpRequest();
        await this.signalRService.startConnection()
        this.clientID = await this.signalRService.GetClientId();
        console.log('Connection started');
        this.signalRService.addTransferChatDataListener();
        this.signalRService.addBrodcastChatDataListen();
        this.signalRService.startStreaming();
        this.signalRService.newMessageEvent.subscribe(msg => this.newMessageEvent.emit(msg));
    }

    broadcastChatData = (message : messageModel) => this.signalRService.broadcastChatData(message);

    private startHttpRequest = () => {
            this.http.get('https://localhost:5001/api/chat')
          .subscribe(res => {
            console.log(res);
          })
      }
}