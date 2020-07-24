import { TestBed } from '@angular/core/testing';
import { DetalleFactura } from './detalle-factura.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetallePedidoService', () => {
  let service: DetalleFactura;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DetalleFactura);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
