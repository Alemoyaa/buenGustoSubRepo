import { TestBed } from '@angular/core/testing';
import { PedidoServices } from './pedido.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PedidosServicesService', () => {
  let service: PedidoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PedidoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
