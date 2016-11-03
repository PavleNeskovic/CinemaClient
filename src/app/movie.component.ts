import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import  {Hello} from "./hello"
import {Movie} from "./movie"
import  {MovieService} from "./movie.service"



@Component({
  selector: 'my-movies',
  providers: [ MovieService ],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  errorMessage: string;
  movies: Movie[];
  constructor ( private route: ActivatedRoute,
                private router: Router,
                private movieService: MovieService) {}
  ngOnInit() {
    this.getMovies();
  //   this.route.params.forEach((params: Params) => {
  //      //let id = +; // (+) converts string 'id' to a number
  //      this.movieService.getMovie(params['title']).then(hero => this.hero = hero);
  //    });
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
  changeShow(){
    
  }
}
