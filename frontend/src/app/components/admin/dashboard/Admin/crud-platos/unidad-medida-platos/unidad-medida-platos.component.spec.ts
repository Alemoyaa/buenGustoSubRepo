import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadMedidaPlatosComponent } from './unidad-medida-platos.component';

describe('UnidadMedidaPlatosComponent', () => {
  let component: UnidadMedidaPlatosComponent;
  let fixture: ComponentFixture<UnidadMedidaPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadMedidaPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadMedidaPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
