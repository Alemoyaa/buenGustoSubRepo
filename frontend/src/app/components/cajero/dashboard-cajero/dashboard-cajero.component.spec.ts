import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCajeroComponent } from './dashboard-cajero.component';

describe('DashboardCajeroComponent', () => {
  let component: DashboardCajeroComponent;
  let fixture: ComponentFixture<DashboardCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
