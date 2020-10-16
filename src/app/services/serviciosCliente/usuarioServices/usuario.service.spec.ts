import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UsuarioServices } from './usuario.services';

describe('UserProfileService', () => {
  let service: UsuarioServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UsuarioServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
