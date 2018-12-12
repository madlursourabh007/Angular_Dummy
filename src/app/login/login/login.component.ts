import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'AngularHealth';
  loginForm : FormGroup;
 
  constructor(private _formBuilder : FormBuilder, private _router : Router){
  }

  ngOnInit() : void {
    this.loginForm = this._formBuilder.group({
      userName : ['',Validators.required],
      passwords: ['', Validators.required]
    })
  }

  goToSignUP() : void {
    this._router.navigate(['/signup']);
  }

  goToHome() : void {
    this._router.navigate(['/home']);
  }
}
