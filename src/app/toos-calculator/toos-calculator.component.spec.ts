import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToosCalculatorComponent } from './toos-calculator.component';

describe('ToosCalculatorComponent', () => {
  let component: ToosCalculatorComponent;
  let fixture: ComponentFixture<ToosCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToosCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToosCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
