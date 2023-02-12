import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Decision, LoanDetail } from '../models/decision';
import { Applicant } from '../models/loanapp';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApprovedComponent implements OnInit {
  @Input() public primaryApplicant: Applicant | undefined;
  @Input() public decision!: Decision;

  initialIndex = 0;

  private selectedLoanDetail: ReplaySubject<LoanDetail> = new ReplaySubject<LoanDetail>(1);
  loanDetail$ = this.selectedLoanDetail.asObservable();

  constructor(public readonly appService: AppService) {}

  ngOnInit(): void {
    this.selectedLoanDetail.next(this.decision.LoanDetails[this.initialIndex]);
  }

  selectedLoanChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const index = Number(target.value);
    this.selectedLoanDetail.next(this.decision.LoanDetails[index]);
  }
}
