import { TestBed } from '@angular/core/testing';
import { UnidadMedidaService } from './unidad_medida.services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserProfileService', () => {
  let service: UnidadMedidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UnidadMedidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
