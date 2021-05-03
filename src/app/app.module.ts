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
import { TagModule } from './features/tag/tag.module';
import { ProjectModule } from './features/project/project.module';
import { MapModule } from './features/mapping/map.module';
import { AdminModule } from './features/admin/admin.module';
import { ResourcesModule } from './features/resources/resources.module';
import { EventsModule } from './features/events/events.module';
import { ChallengesModule } from './features/challenges/challenges.module';

import { TokenInterceptor } from './core/interceptors/token.interceptor';

// core components
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './core/components/home/home.component';
import { HomeCardDeckComponent } from './core/components/home/home-card-deck/home-card-deck.component';
import { HomeTitleSectionComponent } from './core/components/home/home-sections/home-title-section/home-title-section.component';
import { HomeAgenciesSectionComponent } from './core/components/home/home-sections/home-agencies-section/home-agencies-section.component';
import { HomeFeaturedProjectsComponent } from './core/components/home/home-sections/home-featured-projects/home-featured-projects.component';
import { HomeMapSectionComponent } from './core/components/home/home-sections/home-map-section/home-map-section.component';
import { HomeEventSectionComponent } from './core/components/home/home-sections/home-event-section/home-event-section.component';
import { HomeResourceSectionComponent } from './core/components/home/home-sections/home-resource-section/home-resource-section.component';
import { HomeChallengesSectionComponent } from './core/components/home/home-sections/home-challenges-section/home-challenges-section.component';
import { CreateSustainabilityReviewPageComponent, SustainabilityReviewPageComponent } from './features/tools/sustainability-review/sustainability-review-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    HomeCardDeckComponent,
    FooterComponent,
    HomeTitleSectionComponent,
    HomeAgenciesSectionComponent,
    HomeFeaturedProjectsComponent,
    HomeMapSectionComponent,
    HomeEventSectionComponent,
    HomeResourceSectionComponent,
    HomeChallengesSectionComponent,
    CreateSustainabilityReviewPageComponent,
    SustainabilityReviewPageComponent
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
    ResourcesModule,
    EventsModule,
    ChallengesModule,
    ProjectModule,
    TagModule,
    MapModule,
    AdminModule,
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FlexLayoutModule
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
