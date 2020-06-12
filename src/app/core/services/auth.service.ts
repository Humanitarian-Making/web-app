import { LanguageService } from './language.service';
import { Observable, of } from 'rxjs';
import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data
  userLanguage = 'english';
  private defaultPhotoURL = 'assets/logos/profile.png';
  public photoURL = this.defaultPhotoURL;
  public displayName;
  public user;
  public user$; // Observable<User>;
  public authToken;
  public profile;

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    public auth: AngularFireAuth,
    public fb: FormBuilder,
    private http: HttpClient,
    private langService: LanguageService
    ) {
      this.auth.onAuthStateChanged(async (user) => {
        if (user) {
          const email = user.email ? user.email : user.providerData[0].email;
          if (email) {
            this.photoURL = user && user.photoURL ? user.photoURL : this.defaultPhotoURL;
            this.displayName = user && user.displayName ? user.displayName : null;
            this.user = await this.auth.currentUser;
            this.authToken = await this.user.getIdToken();
            this.getProfile().subscribe((res: any) => {
              if (res.success) {
                this.profile = res.user;
                this.langService.setUserLanguage(this.profile.language);
              }
            });
          }
        } else {
          this.user = null;
          this.user$ = of(null);
        }
      });
  }

  getUserGroups(includeOpen: boolean): Observable<any> {
    const params = new HttpParams();
    params.append('includeOpenGroups', includeOpen.toString());
    return this.http.get(environment.apiUrl + 'user/user-groups/', { params });
  }

  getProfile() {
    return this.http.get(environment.apiUrl + `user/profile`);
  }

  updateProfile(displayName, language) {
    return this.http.put(environment.apiUrl + `user/edit`, {
      update: {
        displayName,
        language
      }
    });
  }

  loginWithGoogle() {
    const googleProvider = new auth.GoogleAuthProvider();
    googleProvider.addScope('profile');
    googleProvider.addScope('email');
    return this.oAuthLogin(googleProvider);
  }

  loginWithFacebook() {
    const facebookProvider = new auth.FacebookAuthProvider();
    // facebookProvider.addScope('profile');
    facebookProvider.addScope('email');
    return this.oAuthLogin(facebookProvider);
  }

  private oAuthLogin(provider) {
    return this.auth.signInWithPopup(provider)
      .then((credential) => {
        // this.updateUserData(credential.user);
      });
  }

  loginWithEmailAndPassword(email, password) {
      return this.auth.signInWithEmailAndPassword(email, password);
  }

  signUpWithEmailAndPassword(email, password) {
      return this.auth.createUserWithEmailAndPassword(email, password);
    }

  sendForgotPasswordEmail(email) {
      return this.auth.sendPasswordResetEmail(email);
  }

  logout() {
      this.auth.signOut();
  }

}
