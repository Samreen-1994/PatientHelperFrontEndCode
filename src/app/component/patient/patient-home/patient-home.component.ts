import { Router } from '@angular/router';
import { PatientService } from './../../../service/patient.service';
import { User } from 'src/app/model/user';
import { LocationRequest } from './../../../model/apirequest';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PatientHelperService } from 'src/app/service/helper/patient-helper.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
  locationRequest: LocationRequest = new LocationRequest();
  loggedInUser: User = new User();
  nearByDoctors: Array<User> = new Array<User>();
  searchDoctorResult: Array<User> = new Array<User>();
  doctorSearchText: string;

  constructor(private _patientService: PatientService, private _toastrService: ToastrService, private _router: Router, private _patientHelperService: PatientHelperService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")); // Parsing the json string.
    this.getNearByDoctors();

  }


  getNearByDoctors(): void {
    this.locationRequest.latitude = this.loggedInUser.latitude;
    this.locationRequest.longitude = this.loggedInUser.longitude;
    this._patientService.getNearByDoctors(this.locationRequest).subscribe(
      res => {
        if (res) {
          this.nearByDoctors = res;
        }
      },
      error => {
        this._toastrService.error('everything is broken', 'Major Error');
      }
    );
  }

  searchDoctor(): void {
    this._patientService.searchDoctor(this.doctorSearchText).subscribe(
      res => {
        if (res) {
          this.searchDoctorResult = res;
        }
      },
      error => {
        this._toastrService.error('everything is broken', 'Major Error');
      }
    );
  }

  viewDoctorDetail(d: User): void {
    this._patientHelperService.doctorDetail = d;
    this._router.navigateByUrl('app-doctor-detail');
  }
}
