import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
