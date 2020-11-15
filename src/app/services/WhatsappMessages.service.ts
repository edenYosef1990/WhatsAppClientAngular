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

    public Connect() : void {
        this.signalRService.startConnection()      
            .then(() => {
                this.signalRService.GetClientId().then(clientID => {
                    this.clientID = clientID;
                });
                console.log('Connection started');
                this.signalRService.addTransferChatDataListener();
                this.signalRService.addBrodcastChatDataListen();
                this.signalRService.startStreaming();
                this.signalRService.newMessageEvent.subscribe(msg => this.newMessageEvent.emit(msg));
          }
          )
          .catch(err => console.log('Error while starting connection: ' + err));
        this.startHttpRequest();
    }

    broadcastChatData = (message : messageModel) => this.signalRService.broadcastChatData(message);

    private startHttpRequest = () => {
            this.http.get('https://localhost:5001/api/chat')
          .subscribe(res => {
            console.log(res);
          })
      }
}