import { User } from 'src/app/model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientHelperService {
  doctorDetail: User = new User();

  constructor() { }
}
