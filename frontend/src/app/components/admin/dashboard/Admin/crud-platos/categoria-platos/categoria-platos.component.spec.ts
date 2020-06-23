import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPlatosComponent } from './categoria-platos.component';

describe('CategoriaPlatosComponent', () => {
  let component: CategoriaPlatosComponent;
  let fixture: ComponentFixture<CategoriaPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
