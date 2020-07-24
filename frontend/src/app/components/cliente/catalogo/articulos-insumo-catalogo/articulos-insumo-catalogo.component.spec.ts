import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosInsumoCatalogoComponent } from './articulos-insumo-catalogo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArticulosInsumoCatalogoComponent', () => {
  let component: ArticulosInsumoCatalogoComponent;
  let fixture: ComponentFixture<ArticulosInsumoCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ArticulosInsumoCatalogoComponent],
    }).compileComponents();
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
