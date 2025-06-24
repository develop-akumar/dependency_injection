import { TestBed } from '@angular/core/testing';

import { Comp4Service } from './comp4.service';

describe('Comp4Service', () => {
  let service: Comp4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Comp4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
