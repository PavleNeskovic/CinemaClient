import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { ProjectionComponent } from './projection/projection.component';
import { MovieComponent } from "./movie.component"
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { TheatreComponent } from './theatre/theatre.component';
import { TheatreService } from './theatre/theatre.service';
import { FilmService } from './film/film.service';
import { MovieService } from "./movie.service";
import { ProjectionService } from './projection/projection.service';
import { ExtractDataService } from './extract-data.service'


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    FilmComponent,
    TheatreComponent,
    ProjectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    JsonpModule,
    RouterModule.forRoot([
      { path: 'movies', component: MovieComponent },
      { path: 'movie', component: FilmComponent },
      { path: 'projections', component: ProjectionComponent },
      { path: 'theaters', component: TheatreComponent }
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
