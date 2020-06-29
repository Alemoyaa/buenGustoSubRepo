import { TestBed } from '@angular/core/testing';

import { HorarioLaboralService } from './horario-laboral.service';

describe('HorarioLaboralService', () => {
  let service: HorarioLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorarioLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
