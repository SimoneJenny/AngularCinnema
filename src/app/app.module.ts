import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { MoviesComponent } from './Component/movies/movies.component';
import { GenreComponent } from './Component/genre/genre.component';
import { TheaterComponent } from './Component/theater/theater.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';


const appRoutes : Routes =[
  {path : 'Movies', component: MoviesComponent}, //skal matche
  {path : 'Profile', component: UserProfileComponent}, //skal matche
  {path : 'Info', component: ContactComponent}, //skal matche
]
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MoviesComponent,
    GenreComponent,
    TheaterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
