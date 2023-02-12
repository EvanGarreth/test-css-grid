import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map, tap } from 'rxjs';
import { DecisionStatus } from './models/decision';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'my-app';
  status = DecisionStatus;

  primaryApplicant$ = this.appService.primaryApplicant$;
  decision$ = this.appService.decision$;

  appData$ = combineLatest([
    this.primaryApplicant$, this.decision$
  ]).pipe(
    map(([primaryApplicant, decision]) => ({ primaryApplicant, decision })),
  );

  constructor(public readonly appService: AppService) {}

  public fakeRequest() {
    this.appService.fakeRequest();
  }
}
