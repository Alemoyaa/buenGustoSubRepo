import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDetalleInsumoComponent } from './catalogo-detalle-insumo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CatalogoDetalleInsumoComponent', () => {
  let component: CatalogoDetalleInsumoComponent;
  let fixture: ComponentFixture<CatalogoDetalleInsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CatalogoDetalleInsumoComponent],
    }).compileComponents();
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
