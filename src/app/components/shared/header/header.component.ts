import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  supportNotification = false;

  constructor() {
  }

  ngOnInit() {
    if ('Notification' in window) {
      this.supportNotification = true;
    }
  }

  askForNotificationPermission() {
    Notification.requestPermission(function (result) {
      if (result !== 'granted') {
        console.info('The user has not granted the notifications');
      }
    });
  }
}
