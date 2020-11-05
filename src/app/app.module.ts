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

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SideBarComponent,
    MessageComponent,
    MessagesViewComponent,
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
