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

  getProjectionForId (projectionId: string): Observable<Projection> {
    return this.http.get(this.url + "byid/"+projectionId)
                    .map(this.extractDataService.extractData)
                    .catch(this.extractDataService.handleError);
  }

  setSeatsCreated(id: number): Observable<Projection>{
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log({ id });
    return this.http.put(this.url+'setSeatCreated', { id }, options)
					.map(this.extractDataService.extractData)
                    .catch(this.extractDataService.handleError);
  }

  
}