import { ArticuloManufacturadoService } from './articuloManufacturado.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticuloManufacturadoService', () => {
  let service: ArticuloManufacturadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ArticuloManufacturadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
