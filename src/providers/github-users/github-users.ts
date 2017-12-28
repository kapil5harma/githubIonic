import { UsersPage } from './../../pages/users/users';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubUsers {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<UsersPage[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => <UsersPage[]>res.json());
  }
}