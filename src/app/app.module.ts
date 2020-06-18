import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { highlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    highlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
