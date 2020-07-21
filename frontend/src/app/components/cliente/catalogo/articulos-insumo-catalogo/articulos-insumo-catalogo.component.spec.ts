import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosInsumoCatalogoComponent } from './articulos-insumo-catalogo.component';

describe('ArticulosInsumoCatalogoComponent', () => {
  let component: ArticulosInsumoCatalogoComponent;
  let fixture: ComponentFixture<ArticulosInsumoCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosInsumoCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosInsumoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
