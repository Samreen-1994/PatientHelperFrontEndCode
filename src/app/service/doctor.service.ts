import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  endPoint = 'https://localhost:44376/api/';

  constructor(private _http: HttpClient) { }

  getDoctorAppointments(doctorId: number): Observable<any> {
    return this._http.get(this.endPoint + "doctor/GetDoctorAppointments?doctorId=" + doctorId);
  }

  updatePatientAppointment(appointment: Appointment): Observable<any> {
    return this._http.post(this.endPoint + "patients/CreateUpdateAppointment", appointment);
  }
}
