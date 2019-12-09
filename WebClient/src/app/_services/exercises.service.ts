import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Exercise } from '../_models/exercise';
import { SelectedGroups } from '../_models/selected-groups';
import { Groups } from '../_models/groups';
import { SelectedExercises } from '../_models/selected-exercises';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient) { }

   getAll(groups: SelectedGroups) {    
    // return this.http.post<Groups[]>(`http://localhost:5555/exercises`, groups);

    return this.http.post<Groups[]>(`http://localhost:5555/exercises`, groups);
  }

  getSelectedExercises(exercises: SelectedExercises){
    return this.http.post<Exercise[]>(`http://localhost:5555/exercises/getSelectedExercises`, exercises);
  }
}