import { LanguageService } from './../../services/language.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { LocationService, GeoJson } from 'src/app/services/location.service';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-location-filter',
  templateUrl: './location-filter.component.html',
  styleUrls: ['./location-filter.component.scss']
})
export class LocationFilterComponent implements OnInit {
  locations;
  currentCoordinates: number[];
  currentLocation;
  displayedColumns: string[] = ['name', 'distance', 'action'];
  dataSource = new MatTableDataSource<GeoJson>();
  selection = new SelectionModel<GeoJson>(true, []);
  displayCreateLocationForm: boolean;
  locationForm = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    userGroup: new FormControl(''),
    websiteUrl:  new FormControl('')
  });
  userGroups: any[];

  constructor(
    private locationService: LocationService,
    private authService: AuthService,
    public langService: LanguageService
  ) { }

  ngOnInit() {
    this.currentLocation = null;
    this.displayCreateLocationForm = false;
    this.locations = this.locationService.locations;
    this.locations.subscribe((locations: Array<GeoJson>) => {
      this.dataSource = new MatTableDataSource<GeoJson>(locations);
    });
    this.locationService.currentLocation.subscribe((coords) => {
      this.currentCoordinates = coords;
    });
    this.authService.getUserGroups(true).subscribe((res) => {
      if (res.success) {
        this.userGroups = res.userGroupRoles;
      }
    });
  }

  calcDistance(meters): string {
    if (meters < 1000) {
      return `${Math.round(meters)} m`;
    } else {
      return `${Math.round(meters / 1000)} km`;
    }
  }

  goToLocation(location) {
    this.currentLocation = location;
    this.locationService.currentLocation.next(location.location.coordinates);
  }

  toggleCreateLocation() {
    this.displayCreateLocationForm = !this.displayCreateLocationForm;
  }
}
