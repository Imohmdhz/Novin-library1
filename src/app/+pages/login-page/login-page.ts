import { Component, inject, signal, WritableSignal } from '@angular/core';
import { UsersService } from '../../+services/users-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  useresService = inject(UsersService);
  router = inject(Router);
  check() {
    this.message = '';
    const result = this.useresService.signin(this.loginData().username, this.loginData().password)
    if (result) {
      this.router.navigateByUrl('panel')
    }
    else {
      this.message = 'Invalid username/password'
    };
  }
  message = '';
  loginData = signal<loginModel>({
    username: '',
    password: '',
    keepMe: false
  });
  loginForm = form(this.loginData, (data) => {
    required(data.username, { message: 'Username is required' });
    minLength(data.username, 3, { message: 'Username minimum length is 3 letter' })
    required(data.password, { message: 'Password is required' });
  });
}
export interface loginModel {
  username: string;
  password: string
  keepMe: boolean;
}
