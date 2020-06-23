import { TestBed } from '@angular/core/testing';

import { CategoriaAMService } from './categoria-am.service';

describe('CategoriaAMService', () => {
  let service: CategoriaAMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaAMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
