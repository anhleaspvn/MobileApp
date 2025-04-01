import { TestBed } from '@angular/core/testing';

import { SQLExecService } from './sqlexec.service';

describe('SQLExecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SQLExecService = TestBed.get(SQLExecService);
    expect(service).toBeTruthy();
  });
});
