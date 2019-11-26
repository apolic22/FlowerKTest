import { Injectable } from '@angular/core';
import { Groups } from '../_models/groups';

@Injectable({
  providedIn: 'root'
})
export class StateGroupsExercisesService {

  groupExercise: Groups[];
  constructor() { }
}
