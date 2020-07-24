import { TestBed } from '@angular/core/testing';
import { DetalleManufacturadoService } from './detalle-manufacturado.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetallePedidoService', () => {
  let service: DetalleManufacturadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DetalleManufacturadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
