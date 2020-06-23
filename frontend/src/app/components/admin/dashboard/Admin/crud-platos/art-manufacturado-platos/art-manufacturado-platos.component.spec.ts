import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtManufacturadoPlatosComponent } from './art-manufacturado-platos.component';

describe('ArtManufacturadoPlatosComponent', () => {
  let component: ArtManufacturadoPlatosComponent;
  let fixture: ComponentFixture<ArtManufacturadoPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtManufacturadoPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtManufacturadoPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
