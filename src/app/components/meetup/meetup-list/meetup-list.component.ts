import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../../../services/meetup.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss']
})
export class MeetupListComponent implements OnInit {

  meetups: any;

  constructor(private _meetupService: MeetupService) {
  }

  ngOnInit() {
    this._meetupService.getMeetupList().subscribe(values => {
      this.meetups = values;
    });
  }

}
