import { Component, inject } from '@angular/core';
import { UsersService } from '../../+services/users-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  useresService=inject(UsersService);
  router=inject(Router);
  loginData:loginModel={
    username:'',
    password:'',
    keepMe:false
  };
}
export interface loginModel{
  username:string;
  password:string
  keepMe:boolean;
}
