import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionPlatoCocineroComponent } from './modificacion-plato-cocinero.component';

describe('ModificacionPlatoCocineroComponent', () => {
  let component: ModificacionPlatoCocineroComponent;
  let fixture: ComponentFixture<ModificacionPlatoCocineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificacionPlatoCocineroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionPlatoCocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
