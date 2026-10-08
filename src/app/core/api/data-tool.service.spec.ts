import { TestBed } from '@angular/core/testing';

import { DataToolService } from './data-tool.service';

describe('DataToolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataToolService = TestBed.get(DataToolService);
    expect(service).toBeTruthy();
  });
});
