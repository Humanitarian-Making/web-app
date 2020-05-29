import { UserGroupPageComponent } from './user-group/user-group-page/user-group-page.component';
import { ReadinessLevelsComponent } from './pages/readiness-levels/readiness-levels.component';
import { UpdateUserDetailsComponent } from './auth/update-user-details/update-user-details.component';
import { SignUpFormComponent } from './auth/sign-up-form/sign-up-form.component';
import { TagPageComponent } from './tag/tag-page/tag-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['profile']);

// pages
import { HomeComponent } from './pages/home/home.component';
import { EthicsPageComponent } from './pages/ethics-page/ethics-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';


// project
import { ProjectPageComponent } from './project/project-page/project-page.component';
import { ProjectsPageComponent } from './project/projects-page/projects-page.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';


// mapping
import { MapPageComponent } from './mapping/map-page/map-page.component';

// auth components
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RootTagsPageComponent } from './tag/root-tags-page/root-tags-page.component';
import { EditTagComponent } from './tag/edit-tag/edit-tag.component';
import { SignInFormComponent } from './auth/sign-in-form/sign-in-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map',  component: MapPageComponent },

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

  // auth
  { path: 'sign-up', component: SignUpFormComponent },
  { path: 'sign-in', component: SignInFormComponent },
  { path: 'profile', component: ProfileComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'profile/update', component: UpdateUserDetailsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

  { path: 'events',  component:  EventsPageComponent},

  { path: 'pages/readiness-levels',  component:  ReadinessLevelsComponent},
  { path: 'pages/code-of-practice',  component: EthicsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
