import { ArticuloManufacturadoService } from './articuloManufacturado.service';
import { TestBed } from '@angular/core/testing';


describe('ArticuloManufacturadoService', () => {
  let service: ArticuloManufacturadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticuloManufacturadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
