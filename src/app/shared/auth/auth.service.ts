import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  public get token(): string {
    return localStorage.getItem('token');
  }

  public set token(token: string) {
    this.deleteToken();
    localStorage.setItem('token', token);
  }

  public deleteToken() {
    localStorage.removeItem('token');
  }

  public get isAuthenticated(): Boolean {
    const TOKEN = this.token;
    return tokenNotExpired(null, TOKEN);
  }
}
