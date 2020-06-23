import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajasStockCocineroComponent } from './bajas-stock-cocinero.component';

describe('BajasStockCocineroComponent', () => {
  let component: BajasStockCocineroComponent;
  let fixture: ComponentFixture<BajasStockCocineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajasStockCocineroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajasStockCocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
