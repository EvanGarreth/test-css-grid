import { Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { DecisionStatus } from '../models/decision';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss']
})
export class DecisionComponent {
  status = DecisionStatus;

  primaryApplicant$ = this.appService.primaryApplicant$;
  decision$ = this.appService.decision$;

  appData$ = combineLatest([
    this.primaryApplicant$, this.decision$
  ]).pipe(
    map(([primaryApplicant, decision]) => ({ primaryApplicant, decision })),
  );

  constructor(public readonly appService: AppService) {}
}
