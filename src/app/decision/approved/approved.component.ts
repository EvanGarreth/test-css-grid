import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, shareReplay } from 'rxjs';
import { Decision, LoanDetail } from '../../models/decision';
import { Applicant } from '../../models/loanapp';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApprovedComponent {
  primaryApplicant$ = this.appService.primaryApplicant$;
  decision$ = this.appService.decision$;

  public readonly defaultSelection = 0;
  private detailSelectionSource: BehaviorSubject<number> = new BehaviorSubject<number>(this.defaultSelection);
  detailSelectedAction$ = this.detailSelectionSource.asObservable();

  selectedDetail$ = combineLatest([
    this.decision$,
    this.detailSelectedAction$
  ]).pipe(
    map(([decision, index]) => decision.LoanDetails[index]),
    shareReplay(1)
  );

  appData$ = combineLatest<[Applicant, Decision, LoanDetail]>([
    this.primaryApplicant$, this.decision$, this.selectedDetail$
  ]).pipe(
    map(([primaryApplicant, decision, selectedDetail]) => ({ primaryApplicant, decision, selectedDetail })),
  );

  constructor(public readonly appService: AppService) {}

  selectedLoanChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const index = Number(target.value);
    this.detailSelectionSource.next(index);
  }
}
