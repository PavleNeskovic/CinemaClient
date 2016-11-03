import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { FilmService } from '../film/film.service';

@Component({
  selector: 'my-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  errorMessage: string;
  @Input() movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  getMovie(title: string) {
  	this.movieService.getMovie(title).subscribe(
                       movie => this.movie = movie,
                       error =>  this.errorMessage = <any>error);
  	console.log("movie:");
  	console.log(this.movie);
  }


}
