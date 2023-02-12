import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApprovedComponent } from './approved/approved.component';
import { ErrorComponent } from './error/error.component';
import { DeniedComponent } from './denied/denied.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovedComponent,
    ErrorComponent,
    DeniedComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
