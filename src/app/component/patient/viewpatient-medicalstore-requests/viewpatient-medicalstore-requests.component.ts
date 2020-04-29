import { User } from './../../../model/user';
import { StoreService } from './../../../service/store.service';
import { MedicineRequestResponse, MedicineRequest } from './../../../model/medicine';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-viewpatient-medicalstore-requests',
  templateUrl: './viewpatient-medicalstore-requests.component.html',
  styleUrls: ['./viewpatient-medicalstore-requests.component.css']
})
export class ViewpatientMedicalstoreRequestsComponent implements OnInit {
  medicineResponseList = new Array<MedicineRequestResponse>();
  loggedInUser = new User();

  constructor(private storeService: StoreService, private toast: ToastrService, public sanitizer: DomSanitizer) {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  }

  ngOnInit(): void {
    this.fetchMedicineRequest();
  }

  fetchMedicineRequest() {
    this.storeService.viewUserMedicalStoreRequest(this.loggedInUser).subscribe(
      res => {
        this.medicineResponseList = res;
        this.medicineResponseList.forEach(element => {
          element.requestImage = "data:image/png;base64," + element.requestImage;
        });
      },
      err => {
        this.toast.error('everything is broken');
      }
    );
  }

  createMedicineRequest(medReq: MedicineRequestResponse) {
    let mReq = new MedicineRequest();

    mReq.requestId = medReq.requestId;
    mReq.deleted = false;
    mReq.requestResponse = medReq.requestResponse;

    this.storeService.createMedicineRequest(mReq).subscribe(
      res => {
        if (res) {
          this.toast.success("response sent successfully");
        }
        else {
          this.toast.error("there was an error in sending the message");
        }
      },
      err => {
        this.toast.error("everything is broken");
      }
    );
  }

  focusOutFunction(med: MedicineRequestResponse) {
    med.fieldDisabled = true;

    this.createMedicineRequest(med);
  }
}
