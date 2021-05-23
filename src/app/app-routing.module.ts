import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubReposComponent } from './github-repos/github-repos.component';
const routes: Routes = [
  { path: 'github-repos', component: GithubReposComponent  },
  { path: '', redirectTo: "/github-repos", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
