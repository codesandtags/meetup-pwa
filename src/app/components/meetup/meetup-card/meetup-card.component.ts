import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss']
})
export class MeetupCardComponent implements OnInit {

  @Input() meetup;
  category;

  constructor() {
  }

  ngOnInit() {
    switch (this.meetup.event.category) {
      case 'dance':
        this.category = 'fa-music';
        break;
      case 'technology':
        this.category = 'fa-laptop';
        break;
      case 'tourism':
        this.category = 'fa-globe';
        break;
      case 'food':
        this.category = 'fa-cutlery';
        break;
      default :
        this.category = 'fa-calendar';
    }
  }

}
