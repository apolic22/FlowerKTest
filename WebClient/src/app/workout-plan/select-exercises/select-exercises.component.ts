import { Component, OnInit, HostListener } from '@angular/core';
import { StateGroupsExercisesService } from 'src/app/_services/state-groups-exercises.service';
import { Groups } from 'src/app/_models/groups';
import { SelectedExercises } from 'src/app/_models/selected-exercises';
import { Router } from '@angular/router';
import { ExercisesService } from 'src/app/_services/exercises.service';
import { Exercise } from 'src/app/_models/exercise';

@Component({
  selector: 'app-select-exercises',
  templateUrl: './select-exercises.component.html',
  styleUrls: ['./select-exercises.component.css']
})
export class SelectExercisesComponent implements OnInit {

  panelOpenState = true;
  dataGroups: Groups[];
  selectedExercises = new SelectedExercises();
  dataExercises: Exercise[];
  exercises: Exercise[] = [];

  constructor(
    private exercisesService: ExercisesService,
    private router: Router,
    private stateGroupsExercises: StateGroupsExercisesService) { }

  ngOnInit() {
    this.dataGroups = this.stateGroupsExercises.groupExercise;
    console.log('SelectExercise: ', this.dataGroups);
    this.stateGroupsExercises.groupExercise = undefined;
  }

  selectedItems: number[] = [];
  selectedItemsCount = 0;

  changeSelectedItem(e) {
    console.log('Test: ', e.target.name); // name attribute is groupId of selected exercise
    if (this.selectedItems.length > 0) {
      if (this.selectedItems.find(obj => obj === e.target.id) && e.target.checked === false) {
        const index: number = this.selectedItems.indexOf(e.target.id);
        if (index !== -1) {
          this.selectedItems.splice(index, 1);
        }
      }
      if (this.selectedItems.find(obj => obj !== e.target.id) && e.target.checked === true) {
        this.selectedItems.push(e.target.id);
      }
    } else {
      if (e.target.checked === true) {
        this.selectedItems.push(e.target.id);
      }
    }
    this.selectedItemsCount = this.selectedItems.length;
    if (this.selectedItemsCount === 0) {
      document.getElementById('btnSelectExercises').style.display = 'none';
    } else {
      document.getElementById('btnSelectExercises').style.display = 'block';
    }
  }

  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunctionToTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('btnToTop').style.display = 'block';
    } else {
      document.getElementById('btnToTop').style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  selectExercises() {
    this.selectedExercises.exercises = this.selectedItems;
    this.exercisesService.getSelectedExercises(this.selectedExercises).subscribe(exercises => {
      console.log('REturned result: ', exercises);
    // alert('Selected Exercises: ' + this.selectedItems);
      this.dataExercises = exercises;
      this.selectedItems.length = 0;
      console.log('EXERCISES: ', this.dataExercises);

      //this.stateGroupsExercises.groupExercise = this.dataGroups;
      //this.router.navigate(['/selectExercises']);
    });
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    this.scrollFunctionToTop();
  }

}
