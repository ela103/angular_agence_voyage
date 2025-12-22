import { TestBed } from '@angular/core/testing';

import { Voyage } from './voyage';

describe('Voyage', () => {
  let service: Voyage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Voyage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
