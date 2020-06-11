// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

// auth
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ProviderSignInComponent } from './provider-sign-in/provider-sign-in.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
    SignInFormComponent,
    SignUpFormComponent,
    ProviderSignInComponent,
    UpdateUserDetailsComponent,
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
export class AuthModule { }
