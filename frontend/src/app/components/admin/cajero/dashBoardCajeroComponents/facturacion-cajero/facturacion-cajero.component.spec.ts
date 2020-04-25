import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionCajeroComponent } from './facturacion-cajero.component';

describe('FacturacionCajeroComponent', () => {
  let component: FacturacionCajeroComponent;
  let fixture: ComponentFixture<FacturacionCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacionCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacionCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
