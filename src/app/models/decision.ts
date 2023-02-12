export class Decision {
  status : DecisionStatus = DecisionStatus.Approved;
  LoanDetails: LoanDetail[] = [{
    APR: 1, Term: 48, Payment: 300
  },
  {
    APR: 2, Term: 60, Payment: 400
  },
  {
    APR: 3, Term: 72, Payment: 500
  }];
  AmountFinanced = 100_000;
}

export interface LoanDetail {
  APR: number,
  Term: number,
  Payment: number
}

export enum DecisionStatus {
  Approved = 0,
  Declined = 1
}
