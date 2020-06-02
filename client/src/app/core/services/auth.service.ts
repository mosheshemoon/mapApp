import { Injectable } from '@angular/core';
import { AuthUser, AuthLogin, AuthRegister } from '../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import * as jwt_decode from 'jwt-decode';

const AUTH = 'AUTH';
const USER = 'USER';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  isTokenExpired(): boolean {
    const token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(!date) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  getToken = (): string => localStorage.getItem(AUTH);

  logout(): void {
    localStorage.setItem(USER, "");
    localStorage.setItem(AUTH, "");
  }

  login(loginData: AuthLogin): Observable<AuthUser> {
    const href = "user/" + `${environment.auth.login}`;

    return this.http
      .post(href, loginData)
      .pipe(
        tap((user: AuthUser) =>{
          this.localStorageService.setItem(AUTH, user.token)
          this.localStorageService.setItem(USER, user.user.userName);
        })
      ) as any;
  }

  getUser = (): string => localStorage.getItem(USER);

  register(loginData: AuthRegister): Observable<AuthUser> {
    const href = "/user";
    
    return this.http
    .post(href, loginData)
    .pipe(
      tap((user: any) =>{
        this.localStorageService.setItem(AUTH, user.token);
        this.localStorageService.setItem(USER, user.user.userName);
      })
    ) as any;
  }

  private getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }
}
