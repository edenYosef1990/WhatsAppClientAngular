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
  private _baseUrl: string;
  public broadcastedData: messageModel;

  public setInputdata(inputData : messageModel[]) {
    this.dataToSend = inputData;
  }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chat')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChatDataListener = () => {
    this.hubConnection.on('transferChatData', (data) => {
      this.data = data;
      console.log(data);
    })

  }

  public broadcastChatData = () => {

    const data = this.dataToSend.map(m => {
      const temp = {
        text : m.text
      }
      return temp;
    });
    this.hubConnection.invoke('BroadcastChatData' , data)
    .catch(err => console.log(err));
  }

  public addBrodcastChatDataListen = () => {
    this.hubConnection.on('BroadcastChatData' , (data)=> {
      this.broadcastedData = data;
    })
  }

}
