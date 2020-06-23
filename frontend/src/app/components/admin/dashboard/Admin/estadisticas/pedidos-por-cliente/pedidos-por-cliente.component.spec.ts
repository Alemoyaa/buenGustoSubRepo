import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosPorClienteComponent } from './pedidos-por-cliente.component';

describe('PedidosPorClienteComponent', () => {
  let component: PedidosPorClienteComponent;
  let fixture: ComponentFixture<PedidosPorClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosPorClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
