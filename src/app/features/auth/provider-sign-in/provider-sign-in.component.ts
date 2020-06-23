import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-sign-in',
  templateUrl: './provider-sign-in.component.html',
  styleUrls: ['./provider-sign-in.component.scss']
})
export class ProviderSignInComponent implements OnInit {
  providerError: string;
  constructor(
    public authService: AuthService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private router: Router
    ) {
    iconRegistry.addSvgIcon('google',   sanitizer.bypassSecurityTrustResourceUrl('assets/logos/google.svg'));
    iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/logos/facebook.svg'));
  }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    console.log('Log in with Google');
    this.authService.loginWithGoogle()
      .then( (user) => {
        this.router.navigateByUrl('');
      }).catch((err) => {
        this.providerError = err.message;
      });
  }

  loginWithFacebook() {
    console.log('Log in with Facebook');
    this.authService.loginWithFacebook()
      .then( (user ) => {
        this.router.navigateByUrl('');
      }).catch((err) => {
        this.providerError = err.message;
      });
  }


}
