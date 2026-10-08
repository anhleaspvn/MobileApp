import { Component, Input, OnInit } from '@angular/core';
import { google } from 'google-maps';
// declare global{
//   inter
// }

@Component({
  selector: 'asp-gmap',
  templateUrl: './asp-gmap.component.html',
  styleUrls: ['./asp-gmap.component.scss'],
})
export class aspGmapComponent implements OnInit {

  @Input('latitude') latitude: number;
  @Input('longitude') longitude: number;

  constructor() { }

  ngOnInit() { }

  onMapReady(map) {

    map.setOptions({
      compass: true,
      myLocationButton: true,
      myLocation: true,
      mapTypeControl: true,
      zoom: 16,
      tilt: 30,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
        //style: google.maps.ZoomControlStyle.DEFAULT
      },
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER,
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
      },
      panControl: true,
      usePanning: true,

    });
  }

}
