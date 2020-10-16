import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCajeroComponent } from './pedidos-cajero.component';
import { FormBuilder } from '@angular/forms';

describe('PedidosCajeroComponent', () => {
  let component: PedidosCajeroComponent;
  let fixture: ComponentFixture<PedidosCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosCajeroComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
