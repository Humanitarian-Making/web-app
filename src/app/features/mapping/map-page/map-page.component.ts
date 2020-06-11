import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav/sidenav';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
  @ViewChild('drawer') sideNav: MatSidenav;
  currentLocation = null;
  constructor() { }

  ngOnInit() {
  }

  clickedMap(coords) {
    console.log('coords :', coords);
    this.sideNav.open();
    this.currentLocation = coords;
  }

  close() {
    this.sideNav.close();
  }

  open() {
    this.sideNav.open();
  }

}
