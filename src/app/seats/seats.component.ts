import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Projection } from '../projection/projection';
import { ProjectionService } from '../projection/projection.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
projection: Projection;
errorMessage: string;
rows;
items;
  constructor(
  	private af: AngularFire,
    private route: ActivatedRoute,
    private router: Router,
	private projectionService: ProjectionService
    ) {
  		 this.rows = af.database.list('/rows');
  		 this.items = af.database.list('/items'+this.route.params._value.id); //gurni 1
     }

  ngOnInit() {
  	this.getProjectionForId(this.route.params._value.id);
  	// this.route.params
   //    // (+) converts string 'id' to a number
   //    .switchMap((params: Params) => this.projectionService.getProjectionsForMovie(params['projection']))
   //    .subscribe((projection: Projection) => this.projection = projection);
   //    console.log(this.projection + "2");

  }

  getProjectionForId(projectionId: string) {
    this.projectionService.getProjectionForId(projectionId)
                     .subscribe(
                       projection => this.projection = projection,
                       error =>  this.errorMessage = <any>error);

  }

   
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }

}
