import { TestBed } from '@angular/core/testing';

import { RecetaDetalleService } from './receta-detalle.service';

describe('RecetaDetalleService', () => {
  let service: RecetaDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
