import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { CarouselSlideComponent }   from './carousel-slide/carousel-slide.component';
import { CarouselImageComponent }   from './carousel-image/carousel-image.component';
import { CarouselSwitchComponent }   from './carousel-switch/carousel-switch.component';
import { CarouselContainerComponent }   from './carousel-container/carousel-container.component';

import { CategoryService }   from './../models/category.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CarouselSlideComponent,
    CarouselImageComponent,
    CarouselSwitchComponent,
    CarouselContainerComponent
  ],
  exports: [
    CarouselSlideComponent,
    CarouselImageComponent,
    CarouselSwitchComponent,
    CarouselContainerComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CarouselModule {}