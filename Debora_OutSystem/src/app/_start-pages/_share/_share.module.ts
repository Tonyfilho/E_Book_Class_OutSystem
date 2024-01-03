import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { PopUpMaterialComponent } from './modal-pop-up/pop-up-material.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    PopUpMaterialComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule

  ]
})
export class ShareModule { }
