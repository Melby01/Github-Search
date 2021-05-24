import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  repo } from './repo';
const routes: Routes = [
  { path: 'github-details ', component:  repo  },
  { path: '', redirectTo: "/github-details", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
