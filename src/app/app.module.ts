import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { MainViewComponent } from './mainView/mainView.component'
import { SideBarComponent } from './sideBar/sideBar.component'
import { MessageComponent } from './mainView/message/message.component'
import { MessagesViewComponent } from './mainView/messagesView/messagesView.component'
import { WhatsAppInputComponent } from './mainView/input/input.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotMyMessageComponent } from './mainView/message/NotMyMessage/notMyMessage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SideBarComponent,
    MessageComponent,
    MessagesViewComponent,
    NotMyMessageComponent,
    WhatsAppInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
