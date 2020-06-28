import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDetalleInsumoComponent } from './catalogo-detalle-insumo.component';

describe('CatalogoDetalleInsumoComponent', () => {
  let component: CatalogoDetalleInsumoComponent;
  let fixture: ComponentFixture<CatalogoDetalleInsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoDetalleInsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoDetalleInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
