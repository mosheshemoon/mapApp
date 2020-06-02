import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Init login form.
    this.loginForm = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

    // Init register form.
    this.registerForm = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value).subscribe((val: any) => {  
        this.router.navigateByUrl('/home');
    })
  }

  register(): void {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value).subscribe((val: any) => {
        this.router.navigateByUrl('/home');
    });
  }
}
