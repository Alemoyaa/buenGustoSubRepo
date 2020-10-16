import { TestBed } from '@angular/core/testing';

import { RolService } from './rol.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RolService', () => {
  let service: RolService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
