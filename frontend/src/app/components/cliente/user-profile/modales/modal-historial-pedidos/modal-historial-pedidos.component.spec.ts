import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHistorialPedidosComponent } from './modal-historial-pedidos.component';

describe('ModalHistorialPedidosComponent', () => {
  let component: ModalHistorialPedidosComponent;
  let fixture: ComponentFixture<ModalHistorialPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHistorialPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHistorialPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
