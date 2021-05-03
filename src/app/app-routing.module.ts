import { AdminPageComponent } from './features/admin/admin-page/admin-page.component';
import { UserGroupUsersComponent } from './features/user-group/user-group-users/user-group-users.component';
import { UserGroupPageComponent } from './features/user-group/user-group-page/user-group-page.component';
import { ReadinessLevelsComponent } from './features/resources/readiness-levels/readiness-levels.component';
import { UpdateUserDetailsComponent } from './features/auth/update-user-details/update-user-details.component';
import { SignUpFormComponent } from './features/auth/sign-up-form/sign-up-form.component';
import { TagPageComponent } from './features/tag/tag-page/tag-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['profile']);

import { HomeComponent } from './core/components/home/home.component';

import { CreateSustainabilityReviewPageComponent, SustainabilityReviewPageComponent } from './features/tools/sustainability-review/sustainability-review-page.component';
// project
import { ProjectPageComponent } from './features/project/project-page/project-page.component';
import { ProjectsPageComponent } from './features/project/projects-page/projects-page.component';
import { EditProjectComponent } from './features/project/edit-project/edit-project.component';

// mapping
import { MapPageComponent } from './features/mapping/map-page/map-page.component';

// auth components
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './features/auth/verify-email/verify-email.component';
import { ProfileComponent } from './features/auth/profile/profile.component';
import { RootTagsPageComponent } from './features/tag/root-tags-page/root-tags-page.component';
import { EditTagComponent } from './features/tag/edit-tag/edit-tag.component';
import { SignInFormComponent } from './features/auth/sign-in-form/sign-in-form.component';
import { UserGroupLocationsComponent } from './features/user-group/user-group-locations/user-group-locations.component';
import { UserGroupResourcesComponent } from './features/user-group/user-group-resources/user-group-resources.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map',  component: MapPageComponent },
  
  // sustainability reviews
  { path: 'sustainability', component: CreateSustainabilityReviewPageComponent },
  { path: 'sustainability/:reviewId', component: SustainabilityReviewPageComponent },

  // project
  { path: 'projects',  component: ProjectsPageComponent },
  { path: 'project/:projectId',  component: ProjectPageComponent },
  { path: 'project/:projectId/edit',  component: EditProjectComponent, ...canActivate(redirectUnauthorizedToLogin) },

  // tag
  { path: 'tags',  component:  RootTagsPageComponent},
  { path: 'tag/:tagId',  component:  TagPageComponent},
  { path: 'tag/:tagId/edit',  component:  EditTagComponent},

  // user group
  { path: 'user-group/:userGroupId',  component:  UserGroupPageComponent},
  { path: 'user-group/:userGroupId/users',  component:  UserGroupUsersComponent},
  { path: 'user-group/:userGroupId/locations',  component:  UserGroupLocationsComponent},
  { path: 'user-group/:userGroupId/resources',  component:  UserGroupResourcesComponent},

  // auth
  { path: 'sign-up', component: SignUpFormComponent },
  { path: 'sign-in', component: SignInFormComponent },
  { path: 'profile', component: ProfileComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'profile/update', component: UpdateUserDetailsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

  { path: 'admin',  component:  AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
