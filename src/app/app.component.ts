import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularHealth';
  loginForm : FormGroup;
  
  constructor(private _formBuilder : FormBuilder){}

  ngOnInit() : void {
    this.loginForm = this._formBuilder.group({
      userName : ['',Validators.required],
      passwords: ['', Validators.required]
    })
  }
}
