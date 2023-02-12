export class LoanApp {
  Applicants: Applicant[] = [{name: 'evan', isPrimary: true}, {name: 'gavin', isPrimary: false}];
  other = 'some other property'
}

export interface Applicant {
  name: string,
  isPrimary: boolean
}
