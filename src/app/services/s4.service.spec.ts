import { TestBed } from '@angular/core/testing';

import { S4Service } from './s4.service';

describe('S4Service', () => {
  let service: S4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
