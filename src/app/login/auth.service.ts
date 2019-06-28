import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  profile: any;

  constructor() { }

  login() {
    // call http
    this.isLoggedIn = true;
    // if(this.redirectUrl) {
    //   this.router.navigateTo(this.redirectUrl)
    // }
    this.profile = { name: 'Boris' };
    localStorage.setItem('profile', this.profile);
  }

  logout() {
    // call http
    this.isLoggedIn = false;
  }
}
