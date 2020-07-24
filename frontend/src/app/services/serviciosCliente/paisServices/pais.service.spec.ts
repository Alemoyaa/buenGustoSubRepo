import { TestBed } from '@angular/core/testing';

import { PaisService } from './pais.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FacturaService', () => {
  let service: PaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
