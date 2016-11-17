import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { Projection } from './projection';
import { ProjectionService } from './projection.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
selectedMovie: string;

  constructor(
    private projectionService: ProjectionService,  
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  	this.getProjectionsForMovie(this.movie.title);
  }

   getProjectionsForMovie(movieTitle: string) {
    this.projectionService.getProjectionsForMovie(movieTitle)
                     .subscribe(
                       projections => this.projections = projections,
                       error =>  this.errorMessage = <any>error);

  }

  //isSelected(projection: Projection) { return hero.id === this.selectedId; }

  onSelect(projection: Projection) {
    this.router.navigate(['/seats', projection.id]);
  }

}
