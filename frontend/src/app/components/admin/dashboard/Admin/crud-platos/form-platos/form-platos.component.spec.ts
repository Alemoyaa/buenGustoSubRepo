import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlatosComponent } from './form-platos.component';

describe('FormPlatosComponent', () => {
  let component: FormPlatosComponent;
  let fixture: ComponentFixture<FormPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
