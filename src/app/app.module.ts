import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { highlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { qoutDetailComponent } from './qoute-detail/qoute-detail.component';
import { qouteFormComponent } from './qoute-form/qoute-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    highlightDirective,
    DateCountPipe,
    qoutDetailComponent,
    qouteFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
