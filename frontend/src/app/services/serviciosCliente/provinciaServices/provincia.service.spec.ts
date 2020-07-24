import { TestBed } from '@angular/core/testing';
import { ProvinciaServices } from './provincia.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PedidosServicesService', () => {
  let service: ProvinciaServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProvinciaServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
