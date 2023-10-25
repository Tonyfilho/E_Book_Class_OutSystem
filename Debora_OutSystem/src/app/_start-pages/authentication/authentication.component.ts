import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IModal } from '../_share/interfaces/i-modal';
import { IFormLogin } from '../_share/interfaces/i-forms-login';
import { NgSwitchCase } from '@angular/common';
//import * as firebaseui from 'firebaseui';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  isLoginMode: boolean = true;
  isLodingSpinner: boolean = false;
 authenticationForm: IFormLogin;
  localModal: IModal = { message: '', kind: '', statusText: ''}



  constructor(private fb: FormBuilder, private router: Router) {
    this.authenticationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  showTheError(field:FormControl) {
    switch(field.value) {
      case "email":
        if (this.authenticationForm.controls.email.hasError("required")) {
         'You must enter a value';
        }
        this.authenticationForm.controls.email.hasError("required") ? 'Not a valid email' : '';
        break;
      case "password":

        break;
    }
  }


  onSubmit() {}



}
