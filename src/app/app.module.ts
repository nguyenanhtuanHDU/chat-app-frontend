import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = {
  url: 'http://localhost:8000',
  options: {
    withCredentials: true,
    transports: ['websocket', 'polling'],
    autoConnect: false,
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
