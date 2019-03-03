import { TestBed } from '@angular/core/testing';

import { PatentService } from './patent.service';

describe('PatentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatentService = TestBed.get(PatentService);
    expect(service).toBeTruthy();
  });
});
