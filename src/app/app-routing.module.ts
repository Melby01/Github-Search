import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubDetailsComponent } from './github-details/github-details.component';
import { NavbarComponent} from './navbar/navbar.component';
const routes: Routes = [
  { path: 'github-details ', component:  GithubDetailsComponent  },
  
  { path: '', redirectTo: "/github-details", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
