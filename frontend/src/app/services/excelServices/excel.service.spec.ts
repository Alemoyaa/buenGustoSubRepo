import { TestBed } from '@angular/core/testing';

import { ExcelService } from './excel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExcelService', () => {
  let service: ExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
