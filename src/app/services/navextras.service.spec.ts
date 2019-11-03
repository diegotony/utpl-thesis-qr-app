import { TestBed } from '@angular/core/testing';

import { NavextrasService } from './navextras.service';

describe('NavextrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavextrasService = TestBed.get(NavextrasService);
    expect(service).toBeTruthy();
  });
});
