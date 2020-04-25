import { ReverseGeocodingService } from './../../../service/helper/reverse-geocoding.service';
import { User, GeoAddress } from 'src/app/model/user';
import { Component, OnInit } from '@angular/core';
import { PatientHelperService } from 'src/app/service/helper/patient-helper.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {
  loggedInUser: User = new User();
  constructor(private patientHelper: PatientHelperService, private _reverseGeoCoder: ReverseGeocodingService) { }

  ngOnInit(): void {
    this.loggedInUser = this.patientHelper.doctorDetail;
    let geo = new GeoAddress();
    geo.latitude = this.loggedInUser.latitude;
    geo.longitude = this.loggedInUser.longitude;
    this.loggedInUser.address = this._reverseGeoCoder.convertLatLangToAddress(geo);
  }
}
