import { PatientService } from './../../../service/patient.service';
import { User } from './../../../model/user';
import { Appointment } from './../../../model/appointment';
import { Component, OnInit } from '@angular/core';
import { PatientHelperService } from 'src/app/service/helper/patient-helper.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  appointment: Appointment = new Appointment();
  patient: User = new User();

  constructor(private _patientHelper: PatientHelperService, private _patientService: PatientService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.patient = JSON.parse(sessionStorage.getItem("loggedInUser")); // Parsing the json string.
  }

  createAppointment() {
    this.appointment.doctorId = this._patientHelper.doctorDetail.userId;
    this.appointment.patientId = this.patient.userId;

    this._patientService.createAppointment(this.appointment).subscribe(
      res => {
        if (res == true) {
          this._toastr.success("Appointment Added Successfully, Go to Appointment Request page to view its status");
        }
        else {
          this._toastr.error("there was an error in placing appointment request");
        }
      },
      error => {
        this._toastr.error("everything is broken");
      }
    );

  }

}
