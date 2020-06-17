import { TestBed } from '@angular/core/testing';

import { PedidosServices } from './pedidos.service';

describe('PedidosServicesService', () => {
  let service: PedidosServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
