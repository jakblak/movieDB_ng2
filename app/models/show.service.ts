import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IShow } from './show';

@Injectable()
export class ShowService {
  private _omdb = 'http://www.omdbapi.com/?s=';

  constructor(private _http: Http) { }

  // schedule(): Observable<IShow[]> {
  //   return this._http.get(this._omdb)
  //     .map((response: Response) => <IShow[]>response.json())
  //     .catch(this.handleError);
  // }

  searchBatman(query: string) {
    return this._http
        .get(`${this._omdb}/${query}`)
        .map((response: Response) => <IShow[]>response.json().Search)
        .do(data => console.log(data))
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}