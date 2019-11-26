import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { CComponent } from './pages/c/c.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' }

  { path: '', component: HomeComponent },
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent },
  { path: 'c', component: CComponent },
  // { path: 'workoutHistory', component: WorkoutHistoryComponent, canActivate: [AuthGuard] },
  // { path: 'fillExercises', component: FillExercisesComponent, canActivate: [AuthGuard] },
  // { path: 'selectExercises', component: SelectExercisesComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
