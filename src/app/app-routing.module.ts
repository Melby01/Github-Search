import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  Repository } from './repo';
const routes: Routes = [
  { path: 'github-details ', component:  Repository  },
  { path: '', redirectTo: "/github-details", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
