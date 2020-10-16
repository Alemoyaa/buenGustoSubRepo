import { ConfiguracionGeneralServices } from './configuracion-general.services';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetallePedidoService', () => {
  let service: ConfiguracionGeneralServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ConfiguracionGeneralServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
