import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
//import { GithubDetailsComponent } from './github-details/github-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DateCountPipe } from './date-count.pipe';
//import { repo } from './repo';
//import { GithubService } from './github-services';
 

@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
   // GithubDetailsComponent,
    NavbarComponent,
    DateCountPipe
    //repo,
    //GithubService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
