import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  userData = new Array<User>();
  constructor(private router: Router, private userService: UserService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/app-register');
  }

  getAllUsers(): void {
    debugger;
    this.userService.getAllnUser().subscribe(
      res => {
        this.userData = res;
      },
      err => {
        this.toast.error('Everything is broken');
      }
    );
  }

  deleteUser(u: User): void {
    debugger;
    var user = new User();
    user.userId = u.userId;
    user.deleted = true;

    this.userService.editUser(user).subscribe(
      res => {
        if (res == false) {
          this.toast.success('Deleted');
          this.getAllUsers();
        }
        else {
          this.toast.error('there was some error in deletion');
        }
      },
      err => {
        this.toast.error('everything is wrong');
      }
    );
  }

  updateUserData(u: User): void {
    this.userService.editUser(u).subscribe(
      res => {
        if (res == true) {
          this.toast.success('Successfully edit');
          this.getAllUsers();
          u.isedit = false;
        }
        else {
          this.toast.error('there was some error in deletion');
        }

      },
      err => {
        this.toast.error('everything is wrong');
      }
    );
  }

}
