import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoClienteCajeroComponent } from './nuevo-cliente-cajero.component';

describe('NuevoClienteCajeroComponent', () => {
  let component: NuevoClienteCajeroComponent;
  let fixture: ComponentFixture<NuevoClienteCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoClienteCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoClienteCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
