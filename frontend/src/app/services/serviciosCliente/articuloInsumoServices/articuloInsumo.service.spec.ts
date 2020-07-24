import { ArticuloInsumoService } from './articuloInsumo.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticuloInsumoService', () => {
  let service: ArticuloInsumoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ArticuloInsumoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
