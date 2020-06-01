import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Servicio1Component } from './components/services/servicio1/servicio1.component';

@NgModule({
  declarations: [
    AppComponent,
    Servicio1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
