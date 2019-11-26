import { Component, OnInit, HostListener } from '@angular/core';
import { GroupsService } from 'src/app/_services/groups.service';
import { Groups } from 'src/app/_models/groups';
import { ExercisesService } from 'src/app/_services/exercises.service';
import { Exercise } from 'src/app/_models/exercise';
import { SelectedGroups } from 'src/app/_models/selected-groups';
import { Router } from '@angular/router';
import { StateGroupsExercisesService } from 'src/app/_services/state-groups-exercises.service';

@Component({
  selector: 'app-make-aplan',
  templateUrl: './make-aplan.component.html',
  styleUrls: ['./make-aplan.component.css']
})
export class MakeAPlanComponent implements OnInit {

  dataGroups: Groups[];
  groups: Groups[] = [];
  // exercises: Exercise[] = [];
  selectedGroups = new SelectedGroups();

  constructor(
    private groupService: GroupsService,
    private exercisesService: ExercisesService,
    private router: Router,
    private stateGroupsExercises: StateGroupsExercisesService) { }

  ngOnInit() {
    this.groupService.getAll().subscribe(groups => {
      this.groups = groups;
    });
  }

  selectedItems: number[] = [];
  selectedItemsCount = 0;

  changeSelectedItem(e) {
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
      document.getElementById('btnSelectGroups').style.display = 'none';
    } else {
      document.getElementById('btnSelectGroups').style.display = 'block';
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

  selectGroups() {
    this.selectedGroups.groups = this.selectedItems;
    this.exercisesService.getAll(this.selectedGroups).subscribe(groups => {
      console.log('REturned result: ', groups);

      this.dataGroups = groups;
      this.selectedItems.length = 0;

      this.stateGroupsExercises.groupExercise = this.dataGroups;
      this.router.navigate(['/selectExercises']);
      //this.router.navigate(['/selectExercises']);  
    });
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    this.scrollFunctionToTop();
  }

}
