import { TestBed, inject } from '@angular/core/testing';

import { ProblemstateService } from './problemstate.service';

describe('ProblemstateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemstateService]
    });
  });

  it('should be created', inject([ProblemstateService], (service: ProblemstateService) => {
    expect(service).toBeTruthy();
  }));
});
