// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

// modules
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { UserGroupModule } from './features/user-group/user-group.module';
import { PagesModule } from './features/pages/pages.module';
import { TagModule } from './features/tag/tag.module';
import { ProjectModule } from './features/project/project.module';
import { MapModule } from './features/mapping/map.module';
import { AdminModule } from './features/admin/admin.module';

import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ValidateEqualModule } from 'ng-validate-equal';

// core components
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { FooterComponent } from './core/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    AuthModule,
    UserGroupModule,
    PagesModule,
    ProjectModule,
    TagModule,
    MapModule,
    AdminModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
