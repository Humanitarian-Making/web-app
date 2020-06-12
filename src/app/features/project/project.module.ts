// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ProjectPageComponent,
    ProjectsPageComponent,
    EditProjectComponent,
    SearchComponent,
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
export class ProjectModule { }
