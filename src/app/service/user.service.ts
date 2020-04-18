import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, LoginModel } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endPoint = 'http://localhost:3000/api/v1/';

  constructor(private _http: HttpClient) { }

  saveUser(user: User): Observable<any> {
    return this._http.post(this.endPoint, user);
  }

  loginUser(loginRequest: LoginModel): Observable<any> {
    return this._http.post(this.endPoint, loginRequest);
  }

}
