import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { HeaderComponent } from './components/header/header.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ParralaxTopComponent } from './components/parralax-top/parralax-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarLeftComponent,
    HomepageComponent,
    PictureCardComponent,
    CarouselComponent,
    ParralaxTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics())
  ],
  providers: [
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
