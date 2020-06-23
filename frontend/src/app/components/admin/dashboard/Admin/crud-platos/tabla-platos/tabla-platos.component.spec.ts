import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPlatosComponent } from './tabla-platos.component';

describe('TablaPlatosComponent', () => {
  let component: TablaPlatosComponent;
  let fixture: ComponentFixture<TablaPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
