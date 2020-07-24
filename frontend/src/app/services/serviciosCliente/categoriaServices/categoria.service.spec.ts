import { TestBed } from '@angular/core/testing';

import { CategoriaService } from './categoria.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoriaAMService', () => {
  let service: CategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
