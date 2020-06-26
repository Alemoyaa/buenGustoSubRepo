import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudacionTiempoComponent } from './recaudacion-tiempo.component';

describe('RecaudacionTiempoComponent', () => {
  let component: RecaudacionTiempoComponent;
  let fixture: ComponentFixture<RecaudacionTiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaudacionTiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaudacionTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
