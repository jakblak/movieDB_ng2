import { Component, OnInit } from '@angular/core';
import { IShow } from './../../models/show';
import { ShowService } from './../../models/show.service';

@Component({
  moduleId: module.id,
  selector: 'mt-show-list',
  templateUrl: 'show-list.component.html',
  styleUrls: ['styles.css']
})

export class ShowListComponent implements OnInit {
  shows: IShow[];
  errorMessage: string;
  defaultSearch: string;

  constructor(private _showService: ShowService) {
    this.defaultSearch = "batman";
  }

  getBatman() {
    this._showService
    .searchBatman(this.defaultSearch)
    .subscribe(
      (shows: IShow[]) => this.shows = shows,
      (error: string) => this.errorMessage = <any>error
      );
  }

   ngOnInit() { this.getBatman(); }

}
