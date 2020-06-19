// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { SyncReportsComponent } from './sync-reports/sync-reports.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    SyncReportsComponent,
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
export class AdminModule { }
