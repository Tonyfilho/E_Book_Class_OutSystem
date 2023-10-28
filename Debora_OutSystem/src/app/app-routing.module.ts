import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'body'},
  {path: 'authentication', loadChildren :() => import('./_start-pages/authentication/authentication.module').then(m => m.AuthenticationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
