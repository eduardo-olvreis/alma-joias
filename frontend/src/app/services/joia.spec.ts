import { TestBed } from '@angular/core/testing';

import { JoiaService } from './joia';

describe('Joia', () => {
  let service: JoiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
