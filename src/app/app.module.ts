import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/layout-components/header/header.component';
import { SectionHeroComponent } from './components/layout-components/section-hero/section-hero.component';
import { SectionHpPresentationComponent } from './components/layout-components/section-hp-presentation/section-hp-presentation.component';
import { TitleComponent } from './components/ui-components/title/title.component';
import { SectionSampleBooksComponent } from './components/layout-components/section-sample-books/section-sample-books.component';
import { BtnBorrowComponent } from './components/ui-components/btn-borrow/btn-borrow.component';
import { CardBookLgComponent } from './components/ui-components/card-book-lg/card-book-lg.component';
import { BadgeCategoryComponent } from './components/ui-components/badge-category/badge-category.component';
import { SectionTestimonialComponent } from './components/layout-components/section-testimonial/section-testimonial.component';
import { CardTestimonialComponent } from './components/ui-components/card-testimonial/card-testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SectionHeroComponent,
    SectionHpPresentationComponent,
    TitleComponent,
    SectionSampleBooksComponent,
    BtnBorrowComponent,
    CardBookLgComponent,
    BadgeCategoryComponent,
    SectionTestimonialComponent,
    CardTestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
