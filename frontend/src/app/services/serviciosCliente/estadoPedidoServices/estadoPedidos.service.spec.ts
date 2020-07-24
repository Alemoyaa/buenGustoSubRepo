import { EstadoPedidoServices } from './estadoPedido.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PedidosServicesService', () => {
  let service: EstadoPedidoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EstadoPedidoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
