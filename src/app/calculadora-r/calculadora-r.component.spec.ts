import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraRComponent } from './calculadora-r.component';

describe('CalculadoraRComponent', () => {
  let component: CalculadoraRComponent;
  let fixture: ComponentFixture<CalculadoraRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
