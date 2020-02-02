import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';                          // for http processing

import {interceptorProviders} from './Interceptors/interceptor-list';      //  1 . Import here

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    HttpClientModule                           // import here
  ],
  providers: [interceptorProviders],     // 2. Provide in this array
  bootstrap: [AppComponent]
})
export class AppModule { }
