import { TestBed } from '@angular/core/testing';

import { ExtrasService } from './extras.service';

describe('ExtrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtrasService = TestBed.get(ExtrasService);
    expect(service).toBeTruthy();
  });
});
