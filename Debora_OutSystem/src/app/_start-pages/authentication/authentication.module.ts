import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';



const  ROUTES_AUTH: Routes = [
  {path: '', component: AuthenticationComponent},
]
@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES_AUTH),
  ]
})
export class AuthenticationModule { }
