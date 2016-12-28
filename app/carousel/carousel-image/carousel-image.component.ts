import { Component, Input } from '@angular/core';
import { ICategory } from './../../models/category';

@Component({
  moduleId: module.id,
  selector: 'mt-carousel-image',
  templateUrl: 'carousel-image.component.html'
})
export class CarouselImageComponent {
    @Input() slide: ICategory;
}
