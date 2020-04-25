import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCocineroComponent } from './dashboard-cocinero.component';

describe('DashboardCocineroComponent', () => {
  let component: DashboardCocineroComponent;
  let fixture: ComponentFixture<DashboardCocineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCocineroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
