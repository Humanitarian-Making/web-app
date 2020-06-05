import { StandardResponse } from 'src/app/interfaces';
import { Observable, of, Subscriber, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';
import { LocationsResponse } from '../interfaces';
import { tap } from 'rxjs/operators';

export enum GeometryType {
  Point = 'Point'
}

export enum FeatureType {
  Feature = 'Feature'
}

export interface GeoJson {
  type: FeatureType;
  geometry: {
    type: GeometryType;
    coordinates: [number, number]
  };
  properties: any;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public locations: Subject<Array<GeoJson>>;
  public geoJsonData: Subject<Array<GeoJson>>;
  public currentLocation: Subject<[number, number]>;

  constructor(private http: HttpClient) {
    this.locations = new BehaviorSubject(null);
    this.geoJsonData = new BehaviorSubject(null);
    this.currentLocation = new BehaviorSubject([0, 0]);
    this.currentLocation.subscribe((coords) => {
      this.query(coords);
    });
    this.query([0, 0]);
  }

  createMarker(coordinates, properties) {

  }

  removeMarker(id) {

  }

  query(coords?, radius?) {
    this.http.put(environment.apiUrl + `location/nearby`, {
      currentLocation: coords,
      distance: radius
    }).subscribe((res: LocationsResponse) => {
      if (res.success) {
        this.locations.next(res.locations);
        const newData = res.locations.map((x) => {
          return this.generateGeoJsonFeature(x.location.coordinates, {name: x.name, desc: x.desc, websiteUrl: x.websiteUrl});
        });
        this.geoJsonData.next(newData);
      }
    });
  }

  public generateGeoJsonFeature(coordinates, properties): GeoJson {
    return {
      type: FeatureType.Feature,
      geometry: {
        type: GeometryType.Point,
        coordinates
      },
      properties,
    };
  }

  editName(locationId, name): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(environment.apiUrl + `location/${locationId}/name/${name}`, { });
  }

  editWebsite(locationId, websiteUrl): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(environment.apiUrl + `location/${locationId}/website`, { websiteUrl });
  }

  editDesc(locationId, descId, language, text): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(environment.apiUrl + `location/${locationId}/desc/${descId}/edit`, { language, text });
  }

  addDesc(locationId, language, text): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(environment.apiUrl + `location/${locationId}/desc/add`, { language, text });
  }

  deleteDesc(locationId, descId): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(environment.apiUrl + `location/${locationId}/desc/${descId}/delete`, { });
  }
}
