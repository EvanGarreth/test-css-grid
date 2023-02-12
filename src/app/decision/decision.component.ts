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

  decision$ = this.appService.decision$;

  constructor(public readonly appService: AppService) {}
}
