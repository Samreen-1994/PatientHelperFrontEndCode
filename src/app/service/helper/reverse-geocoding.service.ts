import { HttpClient } from '@angular/common/http';
import { GeoAddress } from 'src/app/model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReverseGeocodingService {
  endPoint: string = "http://api.positionstack.com/v1/reverse?access_key=6a89eaa673469d10a49d1f9f86268d70&query=";
  data: Root = new Root();
  address: string;

  constructor(private _http: HttpClient) { }

  convertLatLangToAddress(geoaddress: GeoAddress): string {
    this._http.get<Root>(this.endPoint + geoaddress.latitude + "," + geoaddress.longitude)
      .subscribe(
        res => {
          this.data = res;
          this.address = this.data.data[0].label;
        },
        err => {
          console.error(err);

        }
      );
    return this.address;
  }
}


export class Datum {
  latitude: number;
  longitude: number;
  type: string;
  distance: number;
  name: string;
  number?: any;
  postal_code: string;
  street: string;
  confidence: number;
  region: string;
  region_code: string;
  county: string;
  locality?: any;
  administrative_area?: any;
  neighbourhood?: any;
  country: string;
  country_code: string;
  continent: string;
  label: string;
}

export class Root {
  data: Array<Datum> = new Array<Datum>();
}



