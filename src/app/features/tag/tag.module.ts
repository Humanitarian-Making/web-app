// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

// tag
import { TagPageComponent } from './tag-page/tag-page.component';
import { RootTagsPageComponent } from './root-tags-page/root-tags-page.component';
import { EditTagGroupsPageComponent } from './edit-tag-groups-page/edit-tag-groups-page.component';
import { EditTagGroupPageComponent } from './edit-tag-group-page/edit-tag-group-page.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { AddTagComponent } from './add-tag/add-tag.component';
import { CreateTagComponent } from './create-tag/create-tag.component';

@NgModule({
  declarations: [
    TagPageComponent,
    RootTagsPageComponent,
    EditTagGroupsPageComponent,
    EditTagGroupPageComponent,
    CreateTagComponent,
    AddTagComponent,
    EditTagComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [
    CreateTagComponent,
  ]
})
export class TagModule { }
