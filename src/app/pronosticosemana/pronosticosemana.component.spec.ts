import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticosemanaComponent } from './pronosticosemana.component';

describe('PronosticosemanaComponent', () => {
  let component: PronosticosemanaComponent;
  let fixture: ComponentFixture<PronosticosemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronosticosemanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronosticosemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
