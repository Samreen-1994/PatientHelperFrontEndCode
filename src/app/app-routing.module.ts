import { DoctorDetailComponent } from './component/doctor/doctor-detail/doctor-detail.component';
import { PatientHomeComponent } from './component/patient/patient-home/patient-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-register', pathMatch: 'full' },
  { path: 'app-register', component: RegisterComponent },
  { path: 'app-patient-home', component: PatientHomeComponent },
  { path: 'app-doctor-detail', component: DoctorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
