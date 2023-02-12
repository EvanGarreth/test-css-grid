import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApprovedComponent } from './decision/approved/approved.component';
import { ErrorComponent } from './error/error.component';
import { DeniedComponent } from './decision/denied/denied.component';
import { DecisionComponent } from './decision/decision.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovedComponent,
    ErrorComponent,
    DeniedComponent,
    DecisionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
