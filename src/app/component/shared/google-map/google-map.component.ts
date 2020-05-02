import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { GeoAddress } from 'src/app/model/user';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  lat: number = 33.5651;
  lng: number = 73.0169;
  address: string = "";
  geoAddress: GeoAddress = new GeoAddress();

  @Output() notifyAddress: EventEmitter<GeoAddress> = new EventEmitter<GeoAddress>();

  constructor() { }

  ngOnInit() {
  }

  mapClicked($event: any) {
    debugger
    this.geoAddress.latitude = $event.coords.lat;
    this.geoAddress.longitude = $event.coords.lng;

    // for displaying on the map
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;

    this.notifyAddress.emit(this.geoAddress);
  }

  // to be done
  getAddress(latitude, longitude) {
  }
}