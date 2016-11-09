import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { Projection } from './projection';
import { ProjectionService } from './projection.service';
@Component({
  selector: 'my-projection',
  providers: [ ProjectionService ],
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

@Input() movie: Movie;
projections: Projection[];
errorMessage: string;

  constructor(private projectionService: ProjectionService) { }

  ngOnInit() {
  	this.getProjectionsForMovie(this.movie.title);
  }

   getProjectionsForMovie(movieTitle: string) {
    this.projectionService.getProjectionsForMovie(movieTitle)
                     .subscribe(
                       projections => this.projections = projections,
                       error =>  this.errorMessage = <any>error);

  }

}
