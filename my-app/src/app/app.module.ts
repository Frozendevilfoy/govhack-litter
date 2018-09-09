import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AgmCoreModule } from '@agm/core';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
     // import HttpClientModule after BrowserModule.
     HttpClientModule,
    FormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHScERoqiQVK8K0OqaOBc4qeTcTXY8SWk'
    })
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
