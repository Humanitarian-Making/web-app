import { LanguageService } from 'src/app/core/services/language.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.scss']
})
export class UpdateUserDetailsComponent implements OnInit {
  public updateUserDetailsForm: FormGroup;
  public user;
  public loading = false;
  public updated = false;
  public submitted = false;
  public errorMessage: string;
  public languages;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private langService: LanguageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.auth.user.subscribe((user) => {
      this.authService.getProfile().subscribe((res: any) => {
        if (res.success) {
          this.user = res.user;
          if (this.user) {
            this.updateUserDetailsForm = this.formBuilder.group({
              displayName: ['', [Validators.required]],
              language: ['', [Validators.required]]
            });
            this.updateUserDetailsForm.get('displayName').setValue(this.user.displayName);
            this.updateUserDetailsForm.get('language').setValue(this.user.language ? this.user.language : 'english' );
          } else {
            this.router.navigate(['sign-in']);
          }
        }
      });
    });
    this.languages = this.langService.getAvailLanguages();
  }

  get f() { return this.updateUserDetailsForm.controls; }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  clickUpdateUserDetails() {
    this.submitted = true;

    // stop here if updateUserDetailsForm is invalid
    if (this.updateUserDetailsForm.invalid) {
        return;
    }
    console.log(this.updateUserDetailsForm.value);
    const displayName = this.updateUserDetailsForm.value.displayName;
    const language = this.updateUserDetailsForm.value.language;
    this.authService.updateProfile(displayName, language)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.success) {
            this.loading = false;
            this.updated = true;
            this.langService.setUserLanguage(language);
          } else {
            this.loading = false;
            this.errorMessage = res.message;
          }
        },
        (err) => {
          this.errorMessage = 'A Error Occurred';
        }
      );
  }

}
