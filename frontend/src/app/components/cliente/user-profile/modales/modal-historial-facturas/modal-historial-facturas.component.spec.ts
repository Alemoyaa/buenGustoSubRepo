import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHistorialFacturasComponent } from './modal-historial-facturas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalHistorialFacturasComponent', () => {
  let component: ModalHistorialFacturasComponent;
  let fixture: ComponentFixture<ModalHistorialFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ModalHistorialFacturasComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHistorialFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
