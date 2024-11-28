import { TestBed } from '@angular/core/testing';

import { QueryParameterGuard } from './query-parameter.guard';

describe('QueryParameterGuard', () => {
  let guard: QueryParameterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QueryParameterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
