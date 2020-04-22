import { TestBed } from '@angular/core/testing';

import { ArticuloManufacturadoDetalleService } from './articulo-manufacturado-detalle.service';

describe('ArticuloManufacturadoDetalleService', () => {
  let service: ArticuloManufacturadoDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticuloManufacturadoDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
