import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { OtherElementsComponent } from './other-elements/other-elements.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNewsComponent,
    NewsDetailsComponent,
    ContactDetailsComponent,
    OtherElementsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
