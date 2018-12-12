import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from 'src/app/enduser/pages/signup/signup.component';
import { LoginComponent } from 'src/app/login/login/login.component';
import { SignupModule } from '../app/enduser/pages/signup/signup.module';

const routes: Routes = [
  {
    path : 'signup',
    loadChildren : '../app/enduser/pages/signup/signup.module#SignupModule'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    redirectTo : '/login',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
