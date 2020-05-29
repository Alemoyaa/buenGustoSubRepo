import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPedidoCajeroComponent } from './nuevo-pedido-cajero.component';

describe('NuevoPedidoCajeroComponent', () => {
  let component: NuevoPedidoCajeroComponent;
  let fixture: ComponentFixture<NuevoPedidoCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPedidoCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPedidoCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
