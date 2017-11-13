import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MeetupListComponent } from './components/meetup/meetup-list/meetup-list.component';
import { MeetupCardComponent } from './components/meetup/meetup-card/meetup-card.component';
import { MeetupDetailsComponent } from './components/meetup/meetup-details/meetup-details.component';
import { MeetupFormComponent } from './components/meetup/meetup-form/meetup-form.component';
import { MeetupSearchComponent } from './components/meetup/meetup-search/meetup-search.component';
import { environment } from '../environments/environment';

console.log('The configuration is ', environment.firebase);

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
export class AppModule {
}
