import { TestBed } from '@angular/core/testing';

import { RubroGeneralService } from './rubro-general.service';

describe('RubroGeneralService', () => {
  let service: RubroGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubroGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
