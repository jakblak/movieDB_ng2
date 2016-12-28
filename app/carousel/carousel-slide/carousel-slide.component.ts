import { Component, OnInit } from '@angular/core';
import { ICategory } from './../../models/category';
import { CategoryService } from './../../models/category.service';

@Component({
  moduleId: module.id,
  selector: 'mt-carousel-slide',
  templateUrl: 'carousel-slide.component.html'
})
export class CarouselSlideComponent implements OnInit {
  category: ICategory[];
  errorMessage: string;

  constructor(private _categoryService: CategoryService) { }

  getCategories() {
    this._categoryService.allCategories()
      .subscribe(
        category => this.category = category,
        error => this.errorMessage = <any>error
        );
      }

   ngOnInit() { this.getCategories(); }

    // @Input() category: Category;
    // @Output() select: EventEmitter<Category> = new EventEmitter<Category>();

    // browse() {
    //     this.select.emit(this.category);
    // }
}
