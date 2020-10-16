import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosPorClienteComponent } from './pedidos-por-cliente.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PedidosPorClienteComponent', () => {
  let component: PedidosPorClienteComponent;
  let fixture: ComponentFixture<PedidosPorClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PedidosPorClienteComponent],
    }).compileComponents();
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
