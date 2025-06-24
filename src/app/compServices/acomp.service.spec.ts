import { TestBed } from '@angular/core/testing';

import { AcompService } from './acomp.service';

describe('AcompService', () => {
  let service: AcompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
