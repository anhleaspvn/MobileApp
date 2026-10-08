import { TestBed } from '@angular/core/testing';
import { EmpScanService } from './empscan.service';

describe('InventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpScanService = TestBed.get(EmpScanService);
    expect(service).toBeTruthy();
  });
});
