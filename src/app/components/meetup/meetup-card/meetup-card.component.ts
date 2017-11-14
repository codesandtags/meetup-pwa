import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss']
})
export class MeetupCardComponent implements OnInit {

  @Input() meetup;

  constructor() {
  }

  ngOnInit() {
  }

}
