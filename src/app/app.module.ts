// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';


// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

// custom modules
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { UserGroupModule } from './features/user-group/user-group.module';
import { PagesModule } from './features/pages/pages.module';

// auth
import { ProfileComponent } from './features/auth/profile/profile.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './features/auth/verify-email/verify-email.component';
import { SignUpFormComponent } from './features/auth/sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './features/auth/sign-in-form/sign-in-form.component';
import { ProviderSignInComponent } from './features/auth/provider-sign-in/provider-sign-in.component';
import { UpdateUserDetailsComponent } from './features/auth/update-user-details/update-user-details.component';

// projects

// mapping
import { MapPageComponent } from './features/mapping/map-page/map-page.component';
import { MapComponent } from './features/mapping/map/map.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { GroupPageComponent } from './features/tag/group-page/group-page.component';

import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ValidateEqualModule } from 'ng-validate-equal';
import { LocationFilterComponent } from './features/mapping/location-filter/location-filter.component';

// tag
import { TagPageComponent } from './features/tag/tag-page/tag-page.component';
import { RootTagsPageComponent } from './features/tag/root-tags-page/root-tags-page.component';
import { EditTagGroupsPageComponent } from './features/tag/edit-tag-groups-page/edit-tag-groups-page.component';
import { EditTagGroupPageComponent } from './features/tag/edit-tag-group-page/edit-tag-group-page.component';
import { EditTagComponent } from './features/tag/edit-tag/edit-tag.component';
import { AddTagComponent } from './features/tag/add-tag/add-tag.component';
import { CreateTagComponent } from './features/tag/create-tag/create-tag.component';

// pages
import { FooterComponent } from './core/components/footer/footer.component';
import { AdminPageComponent } from './features/admin/admin-page/admin-page.component';
import { SyncReportsComponent } from './features/admin/sync-reports/sync-reports.component';
import { ProjectModule } from './features/project/project.module';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    MapComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
    ToolbarComponent,
    GroupPageComponent,
    TagPageComponent,
    RootTagsPageComponent,
    EditTagGroupsPageComponent,
    EditTagGroupPageComponent,
    CreateTagComponent,
    AddTagComponent,
    EditTagComponent,
    SignInFormComponent,
    SignUpFormComponent,
    ProviderSignInComponent,
    UpdateUserDetailsComponent,
    LocationFilterComponent,
    FooterComponent,
    AdminPageComponent,
    SyncReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    UserGroupModule,
    PagesModule,
    ProjectModule,
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    ValidateEqualModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    CreateTagComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
