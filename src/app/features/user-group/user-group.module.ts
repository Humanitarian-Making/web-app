// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../shared/material.module';

import { UserGroupUsersComponent } from './user-group-users/user-group-users.component';

import { UserGroupPageComponent } from './user-group-page/user-group-page.component';
import {
  UserGroupLocationsComponent,
  UserGroupLocationRowComponent,
  UserGroupLocationNameComponent,
  UserGroupLocationWebsiteComponent
} from './user-group-locations/user-group-locations.component';
import {
  UserGroupLocationDescComponent,
  UserGroupLocationDescArrayComponent
} from './user-group-locations/user-group-location-desc/user-group-location-desc.component';
import {
  UserGroupResourcesComponent,
  UserGroupResourceRowComponent,
  UserGroupResourceNameComponent
} from './user-group-resources/user-group-resources.component';
import { AddResourceComponent } from './user-group-resources/add-resource/add-resource.component';
import { DeleteResourceComponent } from './user-group-resources/delete-resource/delete-resource.component';
import { AddUserComponent } from './user-group-users/add-user/add-user.component';
import { EditUserGroupUserComponent } from './user-group-users/edit-user-group-user/edit-user-group-user.component';

@NgModule({
  declarations: [
    UserGroupPageComponent,
    AddUserComponent,
    UserGroupUsersComponent,
    EditUserGroupUserComponent,
    UserGroupLocationsComponent,
    UserGroupLocationRowComponent,
    UserGroupLocationNameComponent,
    UserGroupLocationDescComponent,
    UserGroupLocationDescArrayComponent,
    UserGroupLocationWebsiteComponent,
    UserGroupResourcesComponent,
    UserGroupResourceRowComponent,
    UserGroupResourceNameComponent,
    AddResourceComponent,
    DeleteResourceComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [
    AddUserComponent,
    AddResourceComponent,
    DeleteResourceComponent
  ],
})
export class UserGroupModule { }
