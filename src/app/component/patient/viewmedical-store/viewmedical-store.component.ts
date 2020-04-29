import { MedicineRequest } from './../../../model/medicine';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { User } from './../../../model/user';
import { StoreService } from './../../../service/store.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewmedical-store',
  templateUrl: './viewmedical-store.component.html',
  styleUrls: ['./viewmedical-store.component.css']
})
export class ViewmedicalStoreComponent implements OnInit {
  medicalStoreSearch: string;
  storeList = new Array<User>();

  public progress: number = 0;
  public message: string;
  uploadedFilePath: string;

  medicineRequest = new MedicineRequest();
  loggedInUser = new User();

  constructor(private storeService: StoreService, private toast: ToastrService, private httpClient: HttpClient) {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")); // Parsing the json string.
  }

  ngOnInit(): void {
  }

  searchMedicalStore() {
    this.storeService.fetchStoresByCity(this.medicalStoreSearch).subscribe(
      res => {
        this.storeList = res;
      },
      err => {
        this.toast.error('everything is broken');
      }
    );
  }

  ContactStore(store: User) {
    this.medicineRequest.medicalStoreId = store.userId;
  }

  upload(files) {
    this.progress = 0;

    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', `https://localhost:44376/api/upload`, formData, {
      reportProgress: true,
    });

    this.httpClient.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      }

      else if (event.type === HttpEventType.Response) {
        this.medicineRequest.requestImage = event.body.toString();
      }
      this.message = "Message Sent Successfully";
    });
  }

  createMedicineRequest() {
    this.medicineRequest.patientId = this.loggedInUser.userId;

    this.storeService.createMedicineRequest(this.medicineRequest).subscribe(
      res => {
        if (res) {
          this.toast.success("Message sent successfully");
          this.medicineRequest = new MedicineRequest();
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

}
