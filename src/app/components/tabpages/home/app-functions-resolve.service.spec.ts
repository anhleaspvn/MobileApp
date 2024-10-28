import { TestBed } from '@angular/core/testing';

import { AppFunctionsResolveService } from './app-functions-resolve.service';

describe('AppFunctionsResolveService', () => {
  let service: AppFunctionsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFunctionsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
