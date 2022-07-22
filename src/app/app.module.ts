import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partial/header/header.component';
import { RegionsComponent } from './page/regions/regions.component';
import {HttpClientModule} from "@angular/common/http";
import { DepartementsComponent } from './page/departements/departements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegionsComponent,
    DepartementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
