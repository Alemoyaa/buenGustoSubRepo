import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDetalleComponent } from './catalogo-detalle.component';

describe('CatalogoDetalleComponent', () => {
  let component: CatalogoDetalleComponent;
  let fixture: ComponentFixture<CatalogoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
