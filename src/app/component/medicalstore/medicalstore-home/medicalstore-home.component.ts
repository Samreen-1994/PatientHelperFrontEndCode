import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicalstore-home',
  templateUrl: './medicalstore-home.component.html',
  styleUrls: ['./medicalstore-home.component.css']
})
export class MedicalstoreHomeComponent implements OnInit {
  loggedInUser = new User();

  constructor(private router: Router) {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/app-register');
  }

}
