import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-exercises',
  templateUrl: './fill-exercises.component.html',
  styleUrls: ['./fill-exercises.component.css']
})
export class FillExercisesComponent implements OnInit {
  step = 0;

  constructor() { }

  ngOnInit() {
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
