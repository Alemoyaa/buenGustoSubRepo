import { TestBed } from '@angular/core/testing';

import { RubroGeneralService } from './rubro-general.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RubroGeneralService', () => {
  let service: RubroGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RubroGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
