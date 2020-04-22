import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCrudComponent } from './catalogo-crud.component';

describe('CatalogoCrudComponent', () => {
  let component: CatalogoCrudComponent;
  let fixture: ComponentFixture<CatalogoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
