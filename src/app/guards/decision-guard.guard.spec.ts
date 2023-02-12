import { TestBed } from '@angular/core/testing';

import { DecisionGuardGuard } from './decision-guard.guard';

describe('DecisionGuardGuard', () => {
  let guard: DecisionGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DecisionGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
