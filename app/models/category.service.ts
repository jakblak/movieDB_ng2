import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ICategory } from './category';

@Injectable()
export class CategoryService {
  private _categoryUrl = 'api/categories.json';

  constructor(private _http: Http) { }

  allCategories(): Observable<ICategory[]> {
    return this._http.get(this._categoryUrl)
      .map((response: Response) => <ICategory[]>response.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  getCategory(id: number): Observable<ICategory> {
    return this.allCategories()
      .map((category: ICategory[]) => category.find(c => id === id));
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}