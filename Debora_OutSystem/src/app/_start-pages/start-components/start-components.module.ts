import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { FooterComponent } from './body/footer/footer.component';
import { HeaderComponent } from './body/header/header.component';
import { MainComponent } from './body/main/main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BodyComponent
  ]
})
export class StartComponentsModule { }
