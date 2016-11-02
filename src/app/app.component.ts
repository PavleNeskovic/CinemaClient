import { Component, OnInit } from '@angular/core';
import  {Hello} from "./hello"
import {Movie} from "./movie"
import  {MovieService} from "./movie.service"


@Component({
  selector: 'app-root',
  providers: [ MovieService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMessage: string;
  hello: Hello;
  movies: Movie[];
  mode = 'Observable';
  constructor (private movieService: MovieService) {}
  ngOnInit() { this.getHello(); this.getMovies();}
  getHello() {
    this.movieService.getHello()
                     .subscribe(
                       heroes => this.hello = heroes,
                       error =>  this.errorMessage = <any>error);
  }
   getMovies() {
    this.movieService.getMovies()
                     .subscribe(
                       movies => this.movies = movies,
                       error =>  this.errorMessage = <any>error);
  }
  addMovie (title: string) {
    if (!title) { return; }
    this.movieService.addMovie(title)
                     .subscribe(
                       movie  => this.movies.push(movie),
                       error =>  this.errorMessage = <any>error);
  }
}
