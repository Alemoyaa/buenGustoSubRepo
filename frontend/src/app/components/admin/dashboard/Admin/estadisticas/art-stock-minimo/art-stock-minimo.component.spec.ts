import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtStockMinimoComponent } from './art-stock-minimo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArtStockMinimoComponent', () => {
  let component: ArtStockMinimoComponent;
  let fixture: ComponentFixture<ArtStockMinimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ArtStockMinimoComponent],
    }).compileComponents();
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
