import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { ProjectionComponent } from './projection/projection.component';
import { MovieComponent } from "./movie.component"
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { TheatreComponent } from './theatre/theatre.component';
import { TheatreService } from './theatre/theatre.service';
import { FilmService } from './film/film.service';
import { MovieService } from "./movie.service";
import { ProjectionService } from './projection/projection.service';
import { ExtractDataService } from './extract-data.service';
import { SeatsComponent } from './seats/seats.component';

export const firebaseConfig = {
    apiKey: "AIzaSyA1H6UKcPNCkUPuj0RB6n4IhAurJDci2YI",
    authDomain: "cinema2-2d714.firebaseapp.com",
    databaseURL: "https://cinema2-2d714.firebaseio.com",
    storageBucket: "cinema2-2d714.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    FilmComponent,
    TheatreComponent,
    ProjectionComponent,
    SeatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
      { path: 'movies', component: MovieComponent },
      { path: 'movie', component: FilmComponent },
      { path: 'theaters', component: TheatreComponent },
      { path: 'seats/:id', component: SeatsComponent }
    ])
  ],
  providers: [
    MovieService,
    TheatreService,
    FilmService,
    ProjectionService,
    ExtractDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
