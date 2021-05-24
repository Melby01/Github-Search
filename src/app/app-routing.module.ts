import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  Repository } from './repo';
const routes: Routes = [
  { path: 'github-repos', component:  Repository  },
  { path: '', redirectTo: "/github-repos", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
