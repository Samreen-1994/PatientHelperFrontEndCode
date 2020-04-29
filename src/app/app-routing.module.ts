import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { MedicalstoreHomeComponent } from './component/medicalstore/medicalstore-home/medicalstore-home.component';
import { ViewpatientMedicalstoreRequestsComponent } from './component/patient/viewpatient-medicalstore-requests/viewpatient-medicalstore-requests.component';
import { ViewmedicalStoreComponent } from './component/patient/viewmedical-store/viewmedical-store.component';
import { DoctorHomeComponent } from './component/doctor/doctor-home/doctor-home.component';
import { ViewAppointmentComponent } from './component/patient/view-appointment/view-appointment.component';
import { CreateAppointmentComponent } from './component/patient/create-appointment/create-appointment.component';
import { DoctorDetailComponent } from './component/doctor/doctor-detail/doctor-detail.component';
import { PatientHomeComponent } from './component/patient/patient-home/patient-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-register', pathMatch: 'full' },
  { path: 'app-register', component: RegisterComponent },
  { path: 'app-patient-home', component: PatientHomeComponent },
  { path: 'app-doctor-detail', component: DoctorDetailComponent },
  { path: 'app-create-appointment', component: CreateAppointmentComponent },
  { path: 'view-appointments', component: ViewAppointmentComponent },
  { path: 'doctor-home', component: DoctorHomeComponent },
  { path: 'view-medical-store', component: ViewmedicalStoreComponent },
  { path: 'view-store-request-patient', component: ViewpatientMedicalstoreRequestsComponent },
  { path: 'app-store-home', component: MedicalstoreHomeComponent },
  { path: 'app-admin-home', component: AdminHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
