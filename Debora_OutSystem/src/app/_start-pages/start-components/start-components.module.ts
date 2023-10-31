import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { FooterComponent } from './body/footer/footer.component';
import { HeaderComponent } from './body/header/header.component';
import { MainComponent } from './body/main/main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainComponent,

  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    BodyComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class StartComponentsModule { }
