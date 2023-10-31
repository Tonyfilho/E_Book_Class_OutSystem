import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsystemComponent } from './outsystem.component';
import { _ShareMaterialModule } from '../_start-pages/_share/_share-material.module';



@NgModule({
  declarations: [
    OutsystemComponent
  ],
  imports: [
    CommonModule,
    _ShareMaterialModule
  ]
})
export class OutsystemModule { }
