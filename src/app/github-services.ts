import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { repo } from './repo';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  user: User;
  repo: repo;
  constructor(public http: HttpClient) {
    this.user = new User('', '', '', '', '', 0, 0, new Date(), 0, '', '');
    this.repo = new repo('', '', '', new Date());
  }
  getUser(username: string) {
    interface ApiResponse {
      avatar_url: string;
      login: string;
      company: string;
      location: string;
      name: string;
      followers: number;
      following: number;
      created_at: Date;
      public_repos: number;
      html_url: string;
      email: string;
    }

    let urlUser = "https://api.github.com/users/"+username;
    let promise = new Promise ((resolve, reject) => {
      this.http
        .get<ApiResponse>(urlUser)
        .toPromise()
        .then(
          (data) => {
            this.user = data;
            console.log (this.user)
            resolve(data);
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
    return promise;
  }

  getRepos(username: string) {
    interface RepoResponse {
      name: any;
      description: any;
      html_url: any;
      created_at: Date;
    }

let urlUser = "https://api.github.com/users/"+ username + '/repos';
    let promise = new Promise ((resolve, reject) => {
      this.http
        .get<RepoResponse>(
          urlUser + '/repo' )
        .toPromise()
        .then(
          (data) => {
            this.repo = data;
            resolve(data);
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
    return promise;
  }
} 
