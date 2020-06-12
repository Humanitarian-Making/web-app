// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../shared/material.module';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesPageComponent } from './pages-page/pages-page.component';
import { EthicsPageComponent } from './ethics-page/ethics-page.component';
import { ReadinessLevelsComponent } from './readiness-levels/readiness-levels.component';

@NgModule({
  declarations: [
    PagesPageComponent,
    EthicsPageComponent,
    ReadinessLevelsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    PagesRoutingModule
  ],
  entryComponents: [ ],
  providers: []
})
export class PagesModule { }
