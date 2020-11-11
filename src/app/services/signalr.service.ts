import { Injectable, Inject } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { messageModel } from '../interfaces/messageModel.model';


@Injectable({
  providedIn: 'root'
})

export class SignalRService {


  public data: messageModel[]
  public dataToSend : messageModel[]

  private hubConnection: signalR.HubConnection;
  public broadcastedData: messageModel;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chat')
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
        this.addTransferChatDataListener();
        this.addBrodcastChatDataListen();
        this.startStreaming();
      }
      )
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addTransferChatDataListener = () => {
    this.hubConnection.on('transferChatData', (data) => {
      this.data = data;
      console.log(data);
    })

  }

  public startStreaming() {
    this.hubConnection.stream("StreamMessages").subscribe({
      next : this.onStreamRecieved,
      error : (err) => console.log(err) ,
      complete : () => console.log("finished streaming")
    });
  }

  public onStreamRecieved(data : messageModel) {
    console.log("recevied in stream :" + data.text);
  }

  public broadcastChatData = (message : messageModel) => {

    const dataToSend = {
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

}
