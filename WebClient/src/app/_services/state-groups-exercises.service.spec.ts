import { TestBed, inject } from '@angular/core/testing';

import { StateGroupsExercisesService } from './state-groups-exercises.service';

describe('StateGroupsExercisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateGroupsExercisesService]
    });
  });

  it('should be created', inject([StateGroupsExercisesService], (service: StateGroupsExercisesService) => {
    expect(service).toBeTruthy();
  }));
});
