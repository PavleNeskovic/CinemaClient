import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ExtractDataService } from '../extract-data.service';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs';
import { Projection } from '../projection/projection';

@Injectable()
export class ProjectionService { 
	url: string = 'http://localhost:8080/projections/'
  constructor(private extractDataService: ExtractDataService,
  			  private http: Http) { }

  getProjectionsForMovie (title: string): Observable<Projection[]> {
    return this.http.get(this.url + title)
                    .map(this.extractDataService.extractData)
                    .catch(this.extractDataService.handleError);
  }

  
}
