import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel, User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest: LoginModel = new LoginModel();
  userResponse: User = new User();

  constructor(private _userService: UserService, private _router: Router, private _toastrService: ToastrService) { }

  ngOnInit() {
  }

  loginUser(): void {
    this._userService.loginUser(this.loginRequest).subscribe(
      res => {
        let redirectTo;

        let response = res;
        if (response && response != 'noUserFound') {
          this.userResponse = response;
          sessionStorage.setItem("loggedInUser", JSON.stringify(this.userResponse)); //saving the logged in User into session

          if (this.userResponse.userType == 0) {
            redirectTo = "app-admin-home";
          }
          else if (this.userResponse.userType == 1) {
            if (this.userResponse.blocked == true) {
              this._toastrService.warning("your account is not yet approved by admin");
            }
            else {
              redirectTo = "doctor-home";
            }
          }
          else if (this.userResponse.userType == 2) {
            if (this.userResponse.blocked == true) {
              this._toastrService.warning("you need to confirm your email");
            }
            else {
              redirectTo = "/app-patient-home";
            }
          }
          else if (this.userResponse.userType == 3) {
            redirectTo = "/app-store-home";
          }

          this._router.navigateByUrl(redirectTo);
        }
        else {
          this._toastrService.error('No User found with provided details', 'Unable to Login');
        }
      },
      error => {
        this._toastrService.error('everything is broken', 'Major Error');
      }
    );
  }

}
