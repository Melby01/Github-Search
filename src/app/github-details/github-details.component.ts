import { Component, OnInit,  OnDestroy } from '@angular/core';
import {  GithubReposService} from '../github-repos.service';
 
import { User } from "./user";
import { Repository } from "./../repository";

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit, OnDestroy {
  users:User;
  repo:Repository;
  
  constructor(private myServiceRepo: GithubReposService){
  
  }

  getUser(username){
        this.myServiceRepo.getUser(username).then(
                (success)=>{
                 this.user=this.myServiceRepo.user;
                              },(error)=>{
                                console.log(error)})
                                
        this.myServiceRepo.getRepos(username).then(
                (success)=>{
                this.repo=this.myServiceRepo.repo;
                            },(error)=>{
                              console.log(error)})
}

  ngOnDestroy(): void {
   
  }
  ngOnInit(): void {
    this.getUser("melby");
  }
 
}

  