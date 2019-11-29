import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;
  // 43.537105   ; 16.489360
  iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  markerTypes = [
    {
      text: 'Parking', value: 'parking_lot_maps.png'
    }
    // ,
    // {
    //   text: "Library", value: "library_maps.png"
    // },
    // {
    //   text: "Information", value: "info-i_maps.png"
    // }
  ];

  selectedMarkerType = 'parking_lot_maps.png';

  isHidden = false;

  ngOnInit() {

    const mapProp = {
      center: new google.maps.LatLng(43.537105, 16.489360),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.latitude = 43.537105;
    this.longitude = 16.489360;
    this.setMyCenter();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    // const mapProp = {
    //   center: new google.maps.LatLng(43.537105, 16.489360),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  setMyCenter() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    const location = new google.maps.LatLng(this.latitude, this.longitude);

    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'FlowerK',
    });

    marker.addListener('click', this.simpleMarkerHandler);

    marker.addListener('click', () => {
      this.markerHandler(marker);
    });
  }

  simpleMarkerHandler() {
    // alert('Simple Component\'s function...');
  }

  markerHandler(marker: google.maps.Marker) {
    // alert('Marker\'s Title: ' + marker.getTitle());
  }

  showCustomMarker() {

    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    const location = new google.maps.LatLng(this.latitude, this.longitude);

    console.log(`selected marker: ${this.selectedMarkerType}`);

    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: this.iconBase + this.selectedMarkerType,
      title: 'Got you!'
    });
  }

  toggleMap() {
    this.isHidden = !this.isHidden;

    this.gmapElement.nativeElement.hidden = this.isHidden;
  }
}
