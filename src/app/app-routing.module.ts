import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { DecisionComponent } from './decision/decision.component';
import { DecisionGuard } from './guards/decision-guard.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'decision', component: DecisionComponent, canActivate: [DecisionGuard] }
  ]},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
