import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavBarComponent } from './component/shared/nav-bar/nav-bar.component';
import { RegisterComponent } from './component/register/register.component';
import { GoogleMapComponent } from './component/shared/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PatientHomeComponent } from './component/patient/patient-home/patient-home.component';
import { DoctorDetailComponent } from './component/doctor/doctor-detail/doctor-detail.component';
import { ViewmedicalStoreComponent } from './component/patient/viewmedical-store/viewmedical-store.component';
import { PatientNavbarComponent } from './component/shared/patient/patient-navbar/patient-navbar.component';
import { CreateAppointmentComponent } from './component/patient/create-appointment/create-appointment.component';
import { ViewAppointmentComponent } from './component/patient/view-appointment/view-appointment.component';
import { DoctorHomeComponent } from './component/doctor/doctor-home/doctor-home.component';
import { DoctorNavbarComponent } from './component/shared/doctor/doctor-navbar/doctor-navbar.component';
import { ViewpatientMedicalstoreRequestsComponent } from './component/patient/viewpatient-medicalstore-requests/viewpatient-medicalstore-requests.component';
import { MedicalstoreHomeComponent } from './component/medicalstore/medicalstore-home/medicalstore-home.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    RegisterComponent,
    GoogleMapComponent,
    PatientHomeComponent,
    DoctorDetailComponent,
    ViewmedicalStoreComponent,
    PatientNavbarComponent,
    CreateAppointmentComponent,
    ViewAppointmentComponent,
    DoctorHomeComponent,
    DoctorNavbarComponent,
    ViewpatientMedicalstoreRequestsComponent,
    MedicalstoreHomeComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCe9bqRYozPZjhgiwuTTrHiXA9l46Q9e-k'
    }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
