import { TestBed } from '@angular/core/testing';
import { LocalidadService } from './localidad.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FacturaService', () => {
  let service: LocalidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LocalidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
