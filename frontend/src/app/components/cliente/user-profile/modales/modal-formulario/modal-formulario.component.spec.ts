import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormularioComponent } from './modal-formulario.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalFormularioComponent', () => {
  let component: ModalFormularioComponent;
  let fixture: ComponentFixture<ModalFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ModalFormularioComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
