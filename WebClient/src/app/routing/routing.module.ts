import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../_guards/auth.guard';
import { LoginComponent } from '../login/login/login.component';
import { RegisterComponent } from '../login/register/register.component';
import { MakeAPlanComponent } from '../workout-plan/make-aplan/make-aplan.component';
import { WorkoutHistoryComponent } from '../workout-plan/workout-history/workout-history.component';
import { FillExercisesComponent } from '../workout-plan/fill-exercises/fill-exercises.component';
import { SelectExercisesComponent } from '../workout-plan/select-exercises/select-exercises.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' }

  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'makeAPlan', component: MakeAPlanComponent, canActivate: [AuthGuard] },
  { path: 'workoutHistory', component: WorkoutHistoryComponent, canActivate: [AuthGuard] },
  { path: 'fillExercises', component: FillExercisesComponent, canActivate: [AuthGuard] },
  { path: 'selectExercises', component: SelectExercisesComponent, canActivate: [AuthGuard] },
 
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
