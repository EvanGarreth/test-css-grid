import { Injectable } from '@angular/core';
import { map, ReplaySubject, throwError } from 'rxjs';
import { Decision } from '../models/decision';
import { LoanApp } from '../models/loanapp';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private decisionSource = new ReplaySubject<Decision>(1);
  decision$ = this.decisionSource.asObservable();

  private loanAppSource = new ReplaySubject<LoanApp>(1);
  loanApp$ = this.loanAppSource.asObservable();

  primaryApplicant$ = this.loanApp$.pipe(
    map((loanApp) => {
      const primary = loanApp.Applicants.find((applicant) => applicant.isPrimary)!;
      /*if (!primary) {
        throwError(() => 'recieved a loanApp without a primary applicant');
      }*/
      return primary;
    })
  );

  constructor() {}

  public fakeRequest() {
    const loan = new LoanApp();
    const decision = new Decision();

    this.loanAppSource.next(loan);
    this.decisionSource.next(decision);
  }
}
