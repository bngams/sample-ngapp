import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  login() {
    // call http
    this.isLoggedIn = true;
    // if(this.redirectUrl) {
    //   this.router.navigateTo(this.redirectUrl)
    // }
  }

  logout() {
    // call http
    this.isLoggedIn = false;
  }
}
