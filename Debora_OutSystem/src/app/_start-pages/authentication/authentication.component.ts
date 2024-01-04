import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormLogin } from '../_share/interfaces/i-forms-login';
import { IModal } from '../_share/interfaces/i-modal';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';
//import * as firebaseui from 'firebaseui';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  isLoginMode: boolean = true;
  isLodingSpinner: boolean = false;
  authenticationForm!: IFormLogin;
  localAvatar$: Observable<string>;
  localModal: IModal = { message: '', kind: '', statusText: '' }



  constructor(private fb: FormBuilder, private router: Router, private authentication: AuthenticationService) {
    // this.authenticationForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    // });
    this.localAvatar$ = this.authentication.avatarUser$;
  }

  showTheError(field: FormControl) {
    switch (field.value) {
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


  goToGmail() {
    this.authentication.handleGoogleSigIn();
  }



}
