import { TestBed } from '@angular/core/testing';

import { HorarioLaboralService } from './horario-laboral.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HorarioLaboralService', () => {
  let service: HorarioLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HorarioLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
