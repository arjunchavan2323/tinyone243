import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroimgComponent } from './component/heroimg/heroimg.component';
import { FeatureComponent } from './component/feature/feature.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InspireComponent } from './inspire/inspire.component';
import { IconComponent } from './icon/icon.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroimgComponent,
    FeatureComponent,
    FooterComponent,
    NavbarComponent,
    InspireComponent,
    IconComponent,
    FeatureCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
