import { Component, OnInit, Input } from '@angular/core';
import { AngularFire } from 'angularfire2';
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
private af: AngularFire;
items;

  constructor(
    private afc: AngularFire,
    private projectionService: ProjectionService,  
    private route: ActivatedRoute,
    private router: Router) { 
      this.af = afc;
      //console.log(this.items.hasChild());
    }

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
    this.items = this.af.database.list('/items'+projection.id);
    console.log("seatsCreated: " + projection.seatsCreated)
    if(!projection.seatsCreated) {
      this.getProjectionsForMovie(this.movie.title);
        for (var i = 0; i < 30; i++) {
          this.addItem(""+i);
        }
    }

    this.projectionService.setSeatsCreated(projection.id)
                     .subscribe(
                       projection => this.projections[projection.id] = projection,
                       error =>  this.errorMessage = <any>error);

    this.router.navigate(['/seats', projection.id]);
  }

  addItem(newName: string) {
    this.items.push({ text: newName });
  }

}
