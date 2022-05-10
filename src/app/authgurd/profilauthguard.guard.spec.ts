import { TestBed } from '@angular/core/testing';

import { ProfilauthguardGuard } from './profilauthguard.guard';

describe('ProfilauthguardGuard', () => {
  let guard: ProfilauthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfilauthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
