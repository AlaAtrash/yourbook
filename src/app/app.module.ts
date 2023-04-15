import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/layout-components/header/header.component';
import { SectionHeroComponent } from './components/layout-components/section-hero/section-hero.component';
import { SectionHpPresentationComponent } from './components/layout-components/section-hp-presentation/section-hp-presentation.component';
import { TitleComponent } from './components/ui-components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SectionHeroComponent,
    SectionHpPresentationComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
