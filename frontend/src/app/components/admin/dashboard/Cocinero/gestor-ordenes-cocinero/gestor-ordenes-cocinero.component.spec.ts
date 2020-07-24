import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorOrdenesCocineroComponent } from './gestor-ordenes-cocinero.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GestorOrdenesCocineroComponent', () => {
  let component: GestorOrdenesCocineroComponent;
  let fixture: ComponentFixture<GestorOrdenesCocineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [GestorOrdenesCocineroComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorOrdenesCocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
