import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosManufacturadosCatalogoComponent } from './articulos-manufacturados-catalogo.component';

describe('ArticulosManufacturadosCatalogoComponent', () => {
  let component: ArticulosManufacturadosCatalogoComponent;
  let fixture: ComponentFixture<ArticulosManufacturadosCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosManufacturadosCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosManufacturadosCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
