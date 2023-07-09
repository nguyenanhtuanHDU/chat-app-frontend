import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // private socket: SocketIOClient.Socket;

  private socket = io('http://localhost:8000');
  messages: string[] = [];
  ngOnInit() {
    this.socket.on('connect', () => {
      console.log('Connected to socket server');
    });
    this.socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });
    this.socket.on('message', (message: string) => {
      this.messages.push(message);
      console.log('Received message:', message);
    });
  }

  title = 'chat-app-frontend';
  message!: string;

  sendMessage() {
    this.socket.emit('message', this.message);
  }
}
