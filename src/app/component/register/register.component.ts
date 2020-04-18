import { Component, OnInit } from '@angular/core';
import { User, GeoAddress } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

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
  phone: number = 0;
  speciality: string = '';
  gender: string = '';
  bloodGroup: string = '';
  age: number = 0;
  city: string = '';
  address: string = '';
  latitude: number = 0;
  longitude: number = 0;

  // medicalStoreSpecific
  storeName: string = '';
  selectedUserType: number = 1;

  constructor(private _userService: UserService) {
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
    this.user.geoAddress.latitude = this.latitude;
    this.user.geoAddress.longitude = this.longitude;
    this.user.storeName = this.storeName;
    this.user.userType = this.selectedUserType;

    this._userService.saveUser(this.user).subscribe(
      res => {

      },
      error => {

      }
    );
  }

}
