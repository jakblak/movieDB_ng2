import { Component, OnInit } from '@angular/core';
import { IShow } from './../../models/show';
import { ShowService } from './../../models/show.service';

@Component({
  moduleId: module.id,
  selector: 'mt-show-list',
  templateUrl: 'show-list.component.html'
})

export class ShowListComponent implements OnInit {
  shows: IShow[];
  errorMessage: string;
  defaultSearch: string;

  constructor(private _showService: ShowService) {
    this.defaultSearch = "Batman";
  }

  getBatman() {
    this._showService
    .searchBatman(this.defaultSearch)
    .subscribe(
      shows => this.shows = shows,
      error => this.errorMessage = <any>error
      );
  }
  // getShows() {
  //   this._showService.schedule()
  //     .subscribe(
  //       shows => this.shows = shows,
  //       error => this.errorMessage = <any>error
  //       );
  //     }

   ngOnInit() { this.getBatman(); }

}
