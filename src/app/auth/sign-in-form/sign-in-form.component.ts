import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    this.loading = true;
    this.authService.loginWithEmailAndPassword(this.form.value.email, this.form.value.password)
    .then((cred) => {
      this.loading = false;
      console.log(cred);
      this.router.navigateByUrl('/profile');
    })
    .catch((err) => {
      this.errorMessage = err.message;
      this.loading = false;
      console.log(err);
    });
  }

}
