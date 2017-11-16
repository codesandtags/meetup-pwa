import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Meetup } from '../models/Meetup';

@Injectable()
export class MeetupService {

  meetupsCollection: AngularFireList<Meetup>;

  constructor(private db: AngularFireDatabase) {
    this.meetupsCollection = db.list('meetups');
    console.log('Ready!');
  }

  public getMeetupList(): Observable<Meetup[]> {
    console.info('[📅 Meetup] Getting meetups...');
    return this.meetupsCollection.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

}
