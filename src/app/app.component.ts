import { Component, OnInit } from '@angular/core';
import  {Hello} from "./hello"
//import {Movie} from "./movie"
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
  me: String = 'Pavle Neskovic'
  mode = 'Observable';
  constructor (private movieService: MovieService) {}
  ngOnInit() { this.getHello();}
  getHello() {
    this.movieService.getHello()
                     .subscribe(
                       heroes => this.hello = heroes,
                       error =>  this.errorMessage = <any>error);
  }
  
}
