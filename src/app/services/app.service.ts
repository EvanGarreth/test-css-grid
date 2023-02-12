import { Injectable } from '@angular/core';
import { BehaviorSubject, map, ReplaySubject, throwError } from 'rxjs';
import { Decision } from '../models/decision';
import { LoanApp } from '../models/loanapp';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private decisionSource = new ReplaySubject<Decision>(1);
  decision$ = this.decisionSource.asObservable();

  private hasDecisionSource = new BehaviorSubject(false);
  hasDecision$ = this.hasDecisionSource.asObservable();

  private loanAppSource = new ReplaySubject<LoanApp>(1);
  loanApp$ = this.loanAppSource.asObservable();

  primaryApplicant$ = this.loanApp$.pipe(
    map((loanApp) => loanApp.Applicants.find((applicant) => applicant.isPrimary)!)
  );

  constructor() {}

  public fakeRequest() {
    const loan = new LoanApp();
    const decision = new Decision();

    this.loanAppSource.next(loan);
    this.hasDecisionSource.next(true);
    this.decisionSource.next(decision);
  }
}
