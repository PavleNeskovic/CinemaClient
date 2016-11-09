// Observable Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Movie } from './movie'
import { Hello }           from './hello';
import { Observable }     from 'rxjs';

@Injectable()
export class MovieService {
  private url = 'http://localhost:8080/';  // URL to web API

  constructor (private http: Http) {}

  getHello (): Observable<Hello> {
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getMovies (): Observable<Movie[]> {
    return this.http.get(this.url+'all')
                    .map(this.extractMovie)
                    .catch(this.handleError);
  }

  getMovie(title: string): Observable<Movie> {
    console.log("getMovie("+title+") service:");
    console.log("Url: " + this.url+'movie/'+title);
    return this.http.get(this.url+'movie/'+title)
                    .map(this.extractMovie)
                    .catch(this.handleError);
  }


  addMovie (title: string, description: string, imageUrl: string): Observable<Movie> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url+'new', { title, description, imageUrl }, options)
                    .map(this.extractMovie)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body.hello);
    return body.hello || { };
  }

private extractMovie(res: Response) {
   let body;

    // check if empty, before call json
    if (res.text()) {
      console.log("extractMovie res has value");
        body = res.json();
    }
    console.log("extractMovie body:");
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

/*
  private heroesUrl = 'app/heroes.json'; // URL to JSON file
*/

;