import { User } from './users';
import { GithubUsers } from './../../providers/github-users/github-users';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];

  constructor(public navCtrl: NavController, private GithubUsers: GithubUsers) {}

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }
}
// User model based on the structure of github api at
// https://api.github.com/users/{username}
export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}