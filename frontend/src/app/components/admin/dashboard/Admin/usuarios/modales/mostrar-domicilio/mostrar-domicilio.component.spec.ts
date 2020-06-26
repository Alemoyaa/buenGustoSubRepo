import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDomicilioComponent } from './mostrar-domicilio.component';

describe('MostrarDomicilioComponent', () => {
  let component: MostrarDomicilioComponent;
  let fixture: ComponentFixture<MostrarDomicilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDomicilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
