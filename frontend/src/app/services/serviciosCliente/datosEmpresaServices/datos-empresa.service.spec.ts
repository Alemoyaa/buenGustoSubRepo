import { TestBed } from '@angular/core/testing';
import { DatosEmpresaService } from './datos-empresa.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetallePedidoService', () => {
  let service: DatosEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DatosEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
