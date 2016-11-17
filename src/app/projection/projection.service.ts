import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ExtractDataService } from '../extract-data.service';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs';
import { Projection } from '../projection/projection';

@Injectable()
export class ProjectionService { 
	urlCollection: string = 'http://localhost:8080/projections/'
	url: string = 'http://localhost:8080/projection/'
  constructor(private extractDataService: ExtractDataService,
  			  private http: Http) { }

  getProjectionsForMovie (title: string): Observable<Projection[]> {
    return this.http.get(this.urlCollection + title)
                    .map(this.extractDataService.extractData)
                    .catch(this.extractDataService.handleError);
  }

  getProjectionForMovie (title: string): Observable<Projection> {
    return this.http.get(this.url + title)
                    .map(this.extractDataService.extractData)
                    .catch(this.extractDataService.handleError);
  }

//Finish implementation, change url and add new path in spring for searchbyid
  getProjectionForId (projectionId: string): Observable<Projection> {
    return this.http.get(this.url + "byid/"+projectionId)
                    .map(this.extractDataService.extractData)
                    .catch(this.extractDataService.handleError);
  }

  
}
