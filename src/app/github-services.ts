import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../app/user';
import { Repository } from './repo';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  user: User;
  repo: Repository;
  constructor(public http: HttpClient) {
    this.user = new User('', '', '', '', '', 0, 0, new Date(), 0, '', '');
    this.repo = new Repository('', '', '', new Date());
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

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          'https://api.github.com/users/' +
            username +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (data) => {
            this.user = data;
            resolve();
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
    interface ApiResponse {
      name: any;
      description: any;
      html_url: any;
      created_at: Date;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          'https://api.github.com/users/' +
            username +
            '/repos?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (data) => {
            this.repo = data;
            resolve();
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