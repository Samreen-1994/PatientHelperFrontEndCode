import { } from 'googlemaps';
import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
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

  @ViewChild('search') searchElementRef: ElementRef;
  @Output() notifyAddress: EventEmitter<GeoAddress> = new EventEmitter<GeoAddress>();
  @ViewChild('addresstext') addresstext: any;

  autocompleteInput: string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      debugger
      let place: google.maps.places.PlaceResult = autocomplete.getPlace();

      //verify result
      if (place.geometry === undefined || place.geometry === null) {
        return;
      }

      //set latitude, longitude and zoom
      this.geoAddress.latitude = place.geometry.location.lat();
      this.geoAddress.longitude = place.geometry.location.lng();

      this.lat = this.geoAddress.latitude;
      this.lng = this.geoAddress.longitude;

      this.notifyAddress.emit(this.geoAddress);
    });
  }

  // mapClicked($event: any) {
  //   this.geoAddress.latitude = $event.coords.lat;
  //   this.geoAddress.longitude = $event.coords.lng;

  //   // for displaying on the map
  //   this.lat = $event.coords.lat;
  //   this.lng = $event.coords.lng;

  //   this.notifyAddress.emit(this.geoAddress);
  // }
}
