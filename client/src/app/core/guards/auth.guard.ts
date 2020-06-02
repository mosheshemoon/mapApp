import { Injectable } from '@angular/core';
import { AuthService } from '../services';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate() {
    if (!this.authService.isTokenExpired()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
