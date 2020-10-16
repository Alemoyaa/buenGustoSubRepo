import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudacionTiempoComponent } from './recaudacion-tiempo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('RecaudacionTiempoComponent', () => {
  let component: RecaudacionTiempoComponent;
  let fixture: ComponentFixture<RecaudacionTiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserModule,
        FormsModule,
      ],
      declarations: [RecaudacionTiempoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaudacionTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
