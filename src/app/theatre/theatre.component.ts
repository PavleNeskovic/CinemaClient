import { Component, OnInit } from '@angular/core';
import { Theatre } from './theatre'
import { TheatreService } from './theatre.service'

@Component({
  selector: 'my-theatre',
  providers: [ TheatreService ],
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css'],
})
export class TheatreComponent implements OnInit {
errorMessage: string;
private theaters: Theatre[];
  constructor(private theatreService: TheatreService) { }

  ngOnInit() {
  	this.getTheaters();
  }

  getTheaters() {
    this.theatreService.getTheaters()
                     .subscribe(
                       theaters => this.theaters = theaters,
                       error =>  this.errorMessage = <any>error);
  }
  addTheatre (name: string) {
    if (!name) { return; }
    this.theatreService.addTheatre(name)
                     .subscribe(
                       theatre  => this.theaters.push(theatre),
                       error =>  this.errorMessage = <any>error);
  }

}
