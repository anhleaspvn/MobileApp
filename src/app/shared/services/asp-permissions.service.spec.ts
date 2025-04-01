import { TestBed } from '@angular/core/testing';

import { aspPermissionsService } from './asp-permissions.service';

describe('aspPermissionsService', () => {
  let service: aspPermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(aspPermissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
