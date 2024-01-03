import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PopUpModalComponent } from './pop-up-modal/pop-up-modal.component';



@NgModule({
  declarations: [

    PopUpModalComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule

  ]
})
export class ShareModule { }
