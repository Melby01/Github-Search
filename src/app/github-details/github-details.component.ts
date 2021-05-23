import { Component, OnInit,  OnDestroy } from '@angular/core';
import {  GithubService} from '../github-service';
 
import { User } from "./user";
import { Repository } from "./../repo";

@Component({
  selector: 'app-github-details',
  templateUrl: './github-details.component.html',
  styleUrls: ['./github-details.component.css']
})
export class GithubDetailsComponent implements OnInit, OnDestroy {
  users:User;
  repo:Repository;
  
  constructor(private myServiceRepo: GithubService){
  
  }

  getUser(username){
        this.myServiceRepo.getUser(username).then(
                (success)=>{
                 this.user=this.myServiceRepo.user;
                              },(error )=>{
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

  