import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  registrationForm : FormGroup;
  constructor(private _formBuilder : FormBuilder, private _router : Router) { }

  ngOnInit() {
    this.registrationForm = this._formBuilder.group({
      customerMobile : ['',Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      customerPin : ['', Validators.required]
    })
  }

  goToLogin() : void {
    this._router.navigate(['/login']);
  }

  performRegistration() : void {
    this._router.navigate(['/login']);
  }

}
