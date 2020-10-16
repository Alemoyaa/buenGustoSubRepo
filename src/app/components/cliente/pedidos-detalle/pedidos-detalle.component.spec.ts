import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDetalleComponent } from './pedidos-detalle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PedidosDetalleComponent', () => {
  let component: PedidosDetalleComponent;
  let fixture: ComponentFixture<PedidosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PedidosDetalleComponent],
    }).compileComponents();
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
