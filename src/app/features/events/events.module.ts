// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

import { EventsRoutingModule } from './events-routing.module';

import { EventsPageComponent } from './events-page/events-page.component';
import { ConferenceComponent } from './conference/conference.component';

@NgModule({
  declarations: [
    EventsPageComponent,
    ConferenceComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    EventsRoutingModule
  ],
  providers: []
})
export class EventsModule { }
