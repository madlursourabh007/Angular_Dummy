import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from 'src/app/enduser/pages/signup/signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ],
  providers : [SignupRoutingModule, ReactiveFormsModule]
})
export class SignupModule { }
