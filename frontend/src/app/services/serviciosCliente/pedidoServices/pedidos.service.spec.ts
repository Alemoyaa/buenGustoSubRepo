import { TestBed } from '@angular/core/testing';
import { PedidoServices } from './pedido.service';

describe('PedidosServicesService', () => {
  let service: PedidoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
