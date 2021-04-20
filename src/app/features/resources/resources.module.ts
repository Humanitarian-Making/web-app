// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

import { ResourcesRoutingModule } from './resources-routing.module';

import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { EthicsPageComponent } from './ethics-page/ethics-page.component';
import { ReadinessLevelsComponent } from './readiness-levels/readiness-levels.component';
import { TrainingPageComponent } from './training-page/training-page.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { ResearchComponent } from './research/research.component';
import { GRNPageComponent } from './grn-page/grn-page.component';

@NgModule({
  declarations: [
    ResourcesPageComponent,
    EthicsPageComponent,
    ReadinessLevelsComponent,
    ResourcePageComponent,
    ResearchComponent,
    TrainingPageComponent,
    GRNPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    ResourcesRoutingModule
  ],
  entryComponents: [ ],
  providers: []
})
export class ResourcesModule { }
