import { Appointment } from './../model/appointment';
import { LocationRequest } from './../model/apirequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  endPoint = 'https://localhost:44376/api/';

  constructor(private _http: HttpClient) { }


  getNearByDoctors(locationRequest: LocationRequest): Observable<any> {
    return this._http.post(this.endPoint + "patients/GetNearByDoctorList", locationRequest);
  }

  searchDoctor(searchText: string): Observable<any> {
    return this._http.get(this.endPoint + "patients/SearchDoctorByNameOrSpeciality?searchText=" + searchText);
  }

  createAppointment(appointment: Appointment): Observable<any> {
    return this._http.post(this.endPoint + "patients/CreateUpdateAppointment", appointment);
  }

  getPatientAppointments(patientId: number): Observable<any> {
    return this._http.get(this.endPoint + "patients/GetPatientAppointments?patientId=" + patientId);
  }
}
