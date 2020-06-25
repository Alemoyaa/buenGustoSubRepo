import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFacturaComponent } from './modal-factura.component';

describe('ModalFacturaComponent', () => {
  let component: ModalFacturaComponent;
  let fixture: ComponentFixture<ModalFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
