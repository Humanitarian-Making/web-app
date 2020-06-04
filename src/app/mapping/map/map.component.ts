import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LocationService, GeoJson, GeometryType, FeatureType } from 'src/app/services/location.service';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  lat = 0.0;
  lng = 0.0;
  canvas;
  locations: Observable<Array<GeoJson>>;
  source: mapboxgl.GeoJSONSource;
  message = 'test';

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locations = this.locationService.geoJsonData;

    this.initializeMap();
  }

  private initializeMap() {
    // /// locate the user
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     this.map.flyTo({
    //       center: [this.lng, this.lat]
    //     });
    //   });
    // }

    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 1,
      center: [this.lng, this.lat]
    });

    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    //// Add Marker on Click
    this.map.on('click', (event) => {
      const coordinates: [number, number] = [event.lngLat.lng, event.lngLat.lat];
      this.locationService.currentLocation.next(coordinates);
    });


    this.map.on('load', (event) => {
      this.map.addSource('locations', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      // selected location blue dot
      this.map.addSource('selected', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      this.locationService.query([this.lng, this.lat]);

      this.locations.subscribe((locations: Array<GeoJson>) => {
        const featureCollection = {
          type: 'FeatureCollection' as const,
          features: locations
        };
        this.source = (this.map.getSource('locations') as mapboxgl.GeoJSONSource).setData(featureCollection);
      });

      this.locationService.currentLocation.subscribe((coords) => {
        this.source = (this.map.getSource('selected') as mapboxgl.GeoJSONSource).setData({
          type: 'FeatureCollection',
          features: [
            {
              type: FeatureType.Feature,
              geometry: {
                type: GeometryType.Point,
                coordinates: coords
              },
              properties: {}
            }
          ]
        });

        this.map.flyTo({
          center: coords
        });
      });

      /// create map layers with realtime data
      this.map.addLayer({
        id: 'locations',
        source: 'locations',
        type: 'circle',
        paint: {
          'circle-radius': 8,
          'circle-color': '#fc9362'
        }
      });

      this.map.addLayer({
        id: 'selected',
        source: 'selected',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#3887be'
        }
      });
    });
  }
}
