import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MeetupListComponent } from './meetup/meetup-list/meetup-list.component';
import { MeetupCardComponent } from './meetup/meetup-card/meetup-card.component';
import { MeetupDetailsComponent } from './meetup/meetup-details/meetup-details.component';
import { MeetupFormComponent } from './meetup/meetup-form/meetup-form.component';
import { MeetupSearchComponent } from './meetup/meetup-search/meetup-search.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    MeetupListComponent,
    MeetupCardComponent,
    MeetupDetailsComponent,
    MeetupFormComponent,
    MeetupSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
