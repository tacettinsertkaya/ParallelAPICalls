import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SequentialComponent } from './sequential/sequential.component';
import { ParalellComponent } from './paralell/paralell.component';

@NgModule({
  declarations: [
    AppComponent,
    SequentialComponent,
    ParalellComponent
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
