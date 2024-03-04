import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductComponent } from './product/product.component';
import { ProductOfferComponent } from './product-offer/product-offer.component';
import { ProductUpdatesComponent } from './product-updates/product-updates.component';
import { RatingComponent } from './rating/rating.component';
import { ComponentOfferComponent } from './component-offer/component-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    ProductComponent,
    ProductOfferComponent,
    ProductUpdatesComponent,
    RatingComponent,
    ComponentOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
