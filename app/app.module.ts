import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CarouselModule } from './carousel/carousel.module';

import { AppComponent } from './app.component';
import { ShowListComponent } from './shows/show-list/show-list.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SearchComponent } from './ui/search/search.component';
import { FooterComponent } from './ui/footer/footer.component';

import { ShowService } from './models/show.service';
import { TruncatePipe } from './shared/truncate.pipe';
import { KeysPipe } from './shared/keys.pipe';

@NgModule({
  imports:      [ BrowserModule,
                        HttpModule,
                        CarouselModule ],
  declarations: [ AppComponent,
                          NavbarComponent,
                          SearchComponent,
                          FooterComponent,
                          ShowListComponent,
                          TruncatePipe,
                          KeysPipe ],
  providers: [ ShowService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }