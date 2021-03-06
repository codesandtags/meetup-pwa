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
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MeetupService } from './services/meetup.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './components/user/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './components/shared/error-404/error-404.component';
import { HomeComponent } from './components/shared/home/home.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    MeetupListComponent,
    MeetupCardComponent,
    MeetupDetailsComponent,
    MeetupFormComponent,
    MeetupSearchComponent,
    LoginComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'meetup-pwa-2017'), // imports firebase/app needed for everything
    AngularFireDatabaseModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AppRoutingModule
  ],
  providers: [MeetupService, AngularFireDatabase],
  bootstrap: [MainComponent]
})
export class AppModule {
}
