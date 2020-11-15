import { Injectable, Inject, EventEmitter } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { observable, Observable, Subject } from 'rxjs';
import { messageModel } from '../interfaces/messageModel.model';


@Injectable({
  providedIn: 'root'
})

export class SignalRService {


  public data: messageModel[]
  public dataToSend : messageModel[]

  private hubConnection: signalR.HubConnection;
  public broadcastedData: messageModel;
  public subj : Subject<messageModel> = new Subject<messageModel>();


  public startConnection = () : Promise<void> => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chat')
      .build();

    return this.hubConnection
      .start()
  }

  public addTransferChatDataListener = () => {
    this.hubConnection.on('transferChatData', (data) => {
      this.data = data;
      console.log(data);
    })

  }

  public startStreaming() {
    this.hubConnection.stream("StreamMessages").subscribe(this.subj);
  }

  public broadcastChatData = (message : messageModel) => {

    const dataToSend = {
      clientID : message.clientID,
      text : message.text
    }
    this.hubConnection.invoke('BroadcastChatData' , dataToSend)
    .catch(err => console.log(err));
  }

  public addBrodcastChatDataListen = () => {
    this.hubConnection.on('BroadcastChatData' , (data)=> {
      this.broadcastedData = data;
    })
  }

  public GetClientId = () : Promise<number> => {
    return this.hubConnection.invoke("SendNewId");
  }
}
