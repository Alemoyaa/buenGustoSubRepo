import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHistorialFacturasComponent } from './modal-historial-facturas.component';

describe('ModalHistorialFacturasComponent', () => {
  let component: ModalHistorialFacturasComponent;
  let fixture: ComponentFixture<ModalHistorialFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHistorialFacturasComponent ]
    })
    .compileComponents();
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
