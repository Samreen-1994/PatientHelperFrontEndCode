import { PatientAppointmentResponse, Appointment } from './../../../model/appointment';
import { DoctorService } from './../../../service/doctor.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  doctor = new User();
  appointmentResponse = new Array<PatientAppointmentResponse>();

  constructor(private _doctorService: DoctorService, private _toasterService: ToastrService) {
    this.doctor = JSON.parse(sessionStorage.getItem("loggedInUser")); // Parsing the json string.
  }

  ngOnInit(): void {
    this.getDoctorAppointments();
  }

  getDoctorAppointments(): void {
    this._doctorService.getDoctorAppointments(this.doctor.userId).subscribe(
      res => {
        this.appointmentResponse = res;
      },
      err => {
        this._toasterService.error('everything is broken');
      }
    );
  }

  approveCompleteAppointment(app: PatientAppointmentResponse, completeAppointment = false) {
    var appointment = new Appointment();
    appointment.appointmentId = app.appointmentId;
    appointment.appointmentApproved = true;
    appointment.appointmentTitle = app.appointmentTitle;
    appointment.appointmentDescription = app.appointmentDescription;
    appointment.appointmentSchedule = app.appointmentSchedule;
    appointment.deleted = false;
    appointment.appointmentCompleted = completeAppointment;

    this._doctorService.updatePatientAppointment(appointment).subscribe(
      res => {
        if (res == false) {
          this._toasterService.success("appointment approved/completed");
          this.getDoctorAppointments();
        }
        else {
          this._toasterService.error("there was an error in approving/completing appointment");
        }
      },
      err => {
        this._toasterService.error("Everything is broken");
      }
    );
  }
}
