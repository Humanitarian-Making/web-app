// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { ChallengeComponent } from './challenge/challenge.component';

@NgModule({
  declarations: [
    ChallengesPageComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    ChallengesRoutingModule
  ],
  providers: []
})
export class ChallengesModule { }
