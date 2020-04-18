import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginModel = new LoginModel();

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  loginUser(): void {
    this._userService.loginUser(this.loginRequest).subscribe(
      res => {

      },
      error => {

      }
    );
  }

}
