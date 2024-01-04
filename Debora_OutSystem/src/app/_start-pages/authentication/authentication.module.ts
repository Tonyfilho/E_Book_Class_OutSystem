import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';



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
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES_AUTH),
  ]
})
export class AuthenticationModule { }
