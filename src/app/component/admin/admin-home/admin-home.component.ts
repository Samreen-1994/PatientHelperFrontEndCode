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
  userDataSearch = new Array<User>();
  searchUserType: number = 2;
  userSearch: string = "";

  constructor(private router: Router, private userService: UserService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/app-register');
  }

  getAllUsers(): void {
    this.userService.getAllnUser(this.searchUserType, this.userSearch).subscribe(
      res => {
        this.userData = res;
      },
      err => {
        this.toast.error('Everything is broken');
      }
    );
  }

  deleteUser(u: User): void {
    u.deleted = true;
    this.userService.editUser(u).subscribe(
      res => {
        if (res == true) {
          this.toast.success('user deleted!');
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
          this.toast.success('user edited!');
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
