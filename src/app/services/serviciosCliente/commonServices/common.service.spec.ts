import { Common } from './../../../entidades/Common';
import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommonService', () => {
  let service: CommonService<Common>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
