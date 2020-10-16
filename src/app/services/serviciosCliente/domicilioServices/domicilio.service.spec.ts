import { DomicilioService } from './domicilio.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FacturaService', () => {
  let service: DomicilioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DomicilioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
