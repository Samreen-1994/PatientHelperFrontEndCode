import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User, LoginModel } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endPoint = 'https://localhost:44376/api/';

  constructor(private _http: HttpClient) { }

  saveUser(user: User): Observable<any> {
    return this._http.post(this.endPoint + "users/registerUser", user);
  }

  loginUser(loginRequest: LoginModel): Observable<any> {
    return this._http.post(this.endPoint + "users/loginUser", loginRequest);
  }

  getAllnUser(): Observable<any> {
    return this._http.get(this.endPoint + "users/fetchAllUsers");
  }

  editUser(user: User): Observable<any> {
    return this._http.post(this.endPoint + "users/editUser", user);
  }

}
