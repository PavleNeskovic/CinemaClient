import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders  } from 'angularfire2';
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
user;
showStyle;
isSeatSelected = false;
  constructor(
  	private af: AngularFire,
    private route: ActivatedRoute,
    private router: Router,
	private projectionService: ProjectionService
    ) {
      this.af.auth.subscribe(user => {
      if(user) {
        console.log(user);
        // user logged in
        this.user = user;
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
  		 this.rows = af.database.list('/rows');
  		 this.items = af.database.list('/items'+this.route.params._value.id);
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

   
  updateItem(item, element, that) {
    console.log(element);
    if(this.isUIDNull(item)){
      document.getElementById(item.$key).style.color = "yellow";
      //element.target.setAttribute("style", "background-color: yellow;");
      this.updateSeat(item);
    } else if(this.isItMe(item)) {
      this.updateSeat(item);
      document.getElementById(item.$key).style.color = "blue";
    } else {
      document.getElementById(item.$key).style.color = "green";
      console.log("disabled");
    }
    //element.target.style.backgroundColor = "green";
  }


  updateSeat(item){
    if(this.isUIDNull(item)) { 
       this.items.update(item.$key, { userId: this.user.uid });
    } else {
      this.items.update(item.$key, { userId: "null" });
    }
  }

  isSomeoneElse(item){
     if(item.userId === this.user.uid) {
       return true;
     } else {
    return false;
  }
  }
  isUIDNull(item){
    if(item.userId === "null"){
      return true;
    } else {
    return false;
  }
  }
  isItMe(item){
     if(item.userId === this.user.auth.uid){
      return true;
    } else {
    return false;
  }
  }

  getStyle(){
    if(this.showStyle===1){
      return "red";
    } else if(this.showStyle===2) { 
      return "yellow";
    } else {
      return "gray";
    }
  }

  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }

  login() {
  this.af.auth.login({
    provider: AuthProviders.Facebook
  });
  console.log(this.af.auth);
}
 
logout() {
  this.af.auth.logout();
}

}
