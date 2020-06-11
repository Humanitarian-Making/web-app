// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../shared/material.module';

import { HomeCardDeckComponent } from './home/home-card-deck/home-card-deck.component';
import { EthicsPageComponent } from './ethics-page/ethics-page.component';
import { HomeComponent } from './home/home.component';
import { ReadinessLevelsComponent } from './readiness-levels/readiness-levels.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { ConferenceComponent } from './events-page/conference/conference.component';

@NgModule({
  declarations: [
    HomeComponent,
    EthicsPageComponent,
    ReadinessLevelsComponent,
    HomeCardDeckComponent,
    EventsPageComponent,
    ConferenceComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    EthicsPageComponent,
    ReadinessLevelsComponent,
    HomeCardDeckComponent,
    EventsPageComponent,
    ConferenceComponent,
  ],
  entryComponents: [ ],
  providers: []
})
export class PagesModule { }
