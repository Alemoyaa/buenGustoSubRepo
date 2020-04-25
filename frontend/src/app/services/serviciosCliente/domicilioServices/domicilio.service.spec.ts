import { TestBed } from '@angular/core/testing';

import { DomicilioService } from '../domicilioServices/domicilio.service';

describe('DomicilioService', () => {
  let service: DomicilioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomicilioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
