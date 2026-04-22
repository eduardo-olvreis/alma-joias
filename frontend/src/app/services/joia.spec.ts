import { TestBed } from '@angular/core/testing';

import { Joia } from './joia';

describe('Joia', () => {
  let service: Joia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Joia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
