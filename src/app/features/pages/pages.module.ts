// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../shared/material.module';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeCardDeckComponent } from './home/home-card-deck/home-card-deck.component';
import { EthicsPageComponent } from './ethics-page/ethics-page.component';
import { HomeComponent } from './home/home.component';
import { ReadinessLevelsComponent } from './readiness-levels/readiness-levels.component';

@NgModule({
  declarations: [
    HomeComponent,
    EthicsPageComponent,
    ReadinessLevelsComponent,
    HomeCardDeckComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    HomeComponent,
    EthicsPageComponent,
    ReadinessLevelsComponent,
    HomeCardDeckComponent,
  ],
  entryComponents: [ ],
  providers: []
})
export class PagesModule { }
