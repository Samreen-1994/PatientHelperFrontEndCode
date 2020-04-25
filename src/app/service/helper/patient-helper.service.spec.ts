import { TestBed } from '@angular/core/testing';

import { PatientHelperService } from './patient-helper.service';

describe('PatientHelperService', () => {
  let service: PatientHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
