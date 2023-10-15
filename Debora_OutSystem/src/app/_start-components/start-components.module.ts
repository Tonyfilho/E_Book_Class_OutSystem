import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './body/header/header.component';
import { FooterComponent } from './body/footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AuthenticationComponent
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
