import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDetalleComponent } from './pedidos-detalle.component';

describe('PedidosDetalleComponent', () => {
  let component: PedidosDetalleComponent;
  let fixture: ComponentFixture<PedidosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
