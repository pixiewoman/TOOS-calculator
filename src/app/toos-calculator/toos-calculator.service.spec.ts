import { TestBed, inject } from '@angular/core/testing';

import { ToosCalculatorService } from './toos-calculator.service';

describe('ToosCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToosCalculatorService]
    });
  });

  it('should be created', inject([ToosCalculatorService], (service: ToosCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
