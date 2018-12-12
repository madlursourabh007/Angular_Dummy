import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './enduser/pages/signup/signup.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ReactiveFormsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
