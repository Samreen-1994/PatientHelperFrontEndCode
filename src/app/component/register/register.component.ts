import { Component, OnInit } from '@angular/core';
import { User, GeoAddress } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user: User;

  // model section
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  phone: number;
  speciality: string = '';
  gender: string = 'female';
  bloodGroup: string = 'A+';
  age: number;
  city: string = '';
  address: string = '';
  latitude: number = 0;
  longitude: number = 0;

  // medicalStoreSpecific
  storeName: string = '';
  selectedUserType: number = 1;

  constructor(private _userService: UserService, private _toastrService: ToastrService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  updateAddress(geoLocation: GeoAddress) {
    this.latitude = geoLocation.latitude;
    this.longitude = geoLocation.longitude;
  }

  saveUser(): void {
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.phone = this.phone;
    this.user.speciality = this.speciality;
    this.user.gender = this.gender;
    this.user.bloodGroup = this.bloodGroup;
    this.user.age = this.age;
    this.user.city = this.city;
    this.user.address = this.address;
    this.user.latitude = this.latitude;
    this.user.longitude = this.longitude;
    this.user.storeName = this.storeName;
    this.user.userType = this.selectedUserType;

    console.log(this.user);

    this._userService.saveUser(this.user).subscribe(
      res => {
        if (res) {
          this._toastrService.success('account set up successfully, login to continue', 'registeration successfull');
        }
        else {
          this._toastrService.error('Email Already Exists', 'This email already exists.');
        }
      },
      error => {
        this._toastrService.error('everything is broken', 'Major Error');
      }
    );
  }

}
