// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

// mapping
import { MapPageComponent } from './map-page/map-page.component';
import { MapComponent } from './map/map.component';
import { LocationFilterComponent } from './location-filter/location-filter.component';

@NgModule({
  declarations: [
    MapPageComponent,
    MapComponent,
    LocationFilterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [],
})
export class MapModule { }
