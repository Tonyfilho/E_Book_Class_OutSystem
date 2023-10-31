import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './_start-pages/start-components/body/body.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'home'},
  {path:'home', component: BodyComponent},
  {path: 'authentication', loadChildren :() => import('./_start-pages/authentication/authentication.module').then(m => m.AuthenticationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
