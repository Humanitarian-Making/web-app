// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDialogRef } from '@angular/material/dialog';

import { MaterialModule } from './material.module';
import { DropzoneDirective } from './upload/dropzone.directive';
import { SelectUserGroupComponent } from './select-user-group/select-user-group.component';
import { EditLanguageOptionComponent } from './edit-language-option/edit-language-option.component';
import { LanguageOptionComponent } from './language-option/language-option.component';
import { UploaderComponent } from './upload/uploader/uploader.component';
import { UploadTaskComponent } from './upload/upload-task/upload-task.component';

@NgModule({
  declarations: [
    EditLanguageOptionComponent,
    LanguageOptionComponent,
    SelectUserGroupComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    EditLanguageOptionComponent,
    LanguageOptionComponent,
    SelectUserGroupComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
  ],
  entryComponents: [
    EditLanguageOptionComponent,
    SelectUserGroupComponent,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
  ]
})
export class SharedModule { }
