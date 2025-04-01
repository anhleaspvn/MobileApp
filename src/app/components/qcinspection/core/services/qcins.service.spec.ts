import { TestBed } from '@angular/core/testing';

import { QcinsService } from './qcins.service';

describe('QcinsService', () => {
  let service: QcinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
