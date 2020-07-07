import { DatosEmpresa } from '../../../entidades/DatosEmpresa';
import { TestBed } from '@angular/core/testing';

describe('DetallePedidoService', () => {
  let service: DatosEmpresa;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEmpresa);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
