import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsystemComponent } from './outsystem.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    OutsystemComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule

  ]
})
export class OutsystemModule { }
