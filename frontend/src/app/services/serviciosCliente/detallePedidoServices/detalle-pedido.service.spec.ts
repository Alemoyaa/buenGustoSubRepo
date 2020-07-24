import { TestBed } from '@angular/core/testing';

import { DetallePedidoService } from './detalle-pedido.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetallePedidoService', () => {
  let service: DetallePedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DetallePedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
