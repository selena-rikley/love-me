import { TestBed } from '@angular/core/testing';

import { CharacterStatsService } from './character-stats.service';

describe('CharacterStatsService', () => {
  let service: CharacterStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
