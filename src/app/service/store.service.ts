import { User } from './../model/user';
import { MedicineRequest } from './../model/medicine';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  endPoint = 'https://localhost:44376/api/';

  constructor(private httpService: HttpClient) { }

  fetchStoresByCity(city: string): Observable<any> {
    return this.httpService.get(this.endPoint + "store/GetMedicalStoreByCity?city=" + city);
  }

  createMedicineRequest(mRequest: MedicineRequest): Observable<any> {
    return this.httpService.post(this.endPoint + "store/CreateMedicineRequest", mRequest);
  }

  viewUserMedicalStoreRequest(user: User): Observable<any> {
    return this.httpService.post(this.endPoint + "store/FetchMedicineRequestForUser", user);
  }
}
