import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Theatre } from './theatre'
import { Observable }     from 'rxjs';


@Injectable()
export class TheatreService {

private url = 'http://localhost:8080/';  // URL to web API
  constructor(private http: Http) {
              }

 getTheaters (): Observable<Theatre[]> {
    return this.http.get(this.url+'theatre/all')
                    .map(this.extractTheatre)
                    .catch(this.handleError);
  }

  addTheatre (name: string): Observable<Theatre> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url+'theatre/new', { name }, options)
                    .map(this.extractTheatre)
                    .catch(this.handleError);
  }

private extractTheatre(res: Response) {
   let body;
   console.log(res);
    // check if empty, before call json
    if (res.text()) {
        body = res.json();
    }
    console.log(body);
    return body || {};
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
