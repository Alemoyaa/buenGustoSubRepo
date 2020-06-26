import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtStockMinimoComponent } from './art-stock-minimo.component';

describe('ArtStockMinimoComponent', () => {
  let component: ArtStockMinimoComponent;
  let fixture: ComponentFixture<ArtStockMinimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtStockMinimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtStockMinimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
