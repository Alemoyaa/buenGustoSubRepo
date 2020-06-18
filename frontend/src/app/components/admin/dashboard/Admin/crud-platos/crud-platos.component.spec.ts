import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPlatosComponent } from './crud-platos.component';

describe('CatalogoCrudComponent', () => {
  let component: CrudPlatosComponent;
  let fixture: ComponentFixture<CrudPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
