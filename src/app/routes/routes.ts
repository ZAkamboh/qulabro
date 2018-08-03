import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

const ROUTES_ARRAY = [
  {
    path: '/signup',
    component: SignupComponent
  },
  {
    path: '/login',
    component: ''
  },
  {
    path: '/',
    redirectTo: '/signup'
  },
  {
    path: '**',
    redirectTo: '/signup'
  }
];

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' }, // Replace redirect to the actual component for this route
  { path: 'signup', component: SignupComponent },
  { path: 'login', redirectTo: '/signup' }, // Replace redirect to the actual component for this route
  { path: '**', redirectTo: '/signup' } // Replace redirect to the actual component for this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
