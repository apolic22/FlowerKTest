import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AuthGuard } from '../_guards/auth.guard';
import { LoginComponent } from '../login/login/login.component';
import { RegisterComponent } from '../login/register/register.component';
import { AComponent } from '../pages/a/a.component';
import { BComponent } from '../pages/b/b.component';
import { CComponent } from '../pages/c/c.component';
import { GaleryComponent } from '../pages/galery/galery.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'makeAPlan', component: MakeAPlanComponent, canActivate: [AuthGuard] },
  { path: 'gallery', component: GaleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent },
  { path: 'c', component: CComponent },

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
