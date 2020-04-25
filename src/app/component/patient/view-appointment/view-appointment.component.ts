import { User } from './../../../model/user';
import { Appointment } from './../../../model/appointment';
import { PatientService } from './../../../service/patient.service';
import { Component, OnInit } from '@angular/core';
import { PatientAppointmentResponse } from 'src/app/model/appointment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointmentResponse = new Array<PatientAppointmentResponse>();
  patient = new User();

  constructor(private _patientService: PatientService, private _toastrService: ToastrService) {
    this.patient = JSON.parse(sessionStorage.getItem("loggedInUser")); // Parsing the json string.
  }

  ngOnInit(): void {
    this.getPatientAppointments();
  }

  getPatientAppointments(): void {
    this._patientService.getPatientAppointments(this.patient.userId).subscribe(
      res => {
        this.appointmentResponse = res;
      },
      err => {

      }
    );
  }

  deleteAppointmentRequest(app: PatientAppointmentResponse): void {
    var appointment = new Appointment();
    appointment.appointmentId = app.appointmentId;
    appointment.deleted = true;

    this._patientService.createAppointment(appointment).subscribe(
      res => {
        if (res == false) {
          this._toastrService.error('deleted');
          this.getPatientAppointments();
        }
        else {
          this._toastrService.error('there was some error in deletion');
        }
      },
      err => {
        this._toastrService.error('everything is wrong');
      }
    );
  }
}
