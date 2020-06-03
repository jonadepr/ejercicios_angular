import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceComponent } from './components/service/service.component';
import { ProviderComponent } from './components/provider/provider/provider.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ServiceListComponent } from './components/service-list/service-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ProviderComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
