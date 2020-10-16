import { TestBed } from '@angular/core/testing';

import { FacturaService } from './factura.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FacturaService', () => {
  let service: FacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
