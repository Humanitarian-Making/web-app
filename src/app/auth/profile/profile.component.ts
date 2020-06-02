import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user;
  public userGroups;
  public displayName: string = null;
  public editDisplayName: false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  async ngOnInit() {
    this.authService.auth.user.subscribe((user) => {
      this.authService.getProfile().subscribe((res: any) => {
        if (res.success) {
          this.user = res.user;
          console.log('this.user :', this.user);
          if (this.user) {
            this.authService.getUserGroups(true).subscribe((userGroupRes) => {
              if (userGroupRes.success) {
                this.userGroups = userGroupRes.userGroupRoles;
              }
            });
          } else {
            this.router.navigate(['sign-in']);
          }
        }
      });
    });
  }

  clickSignOut() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  clickEdit() {
    this.router.navigate(['profile/update']);
  }

  goToUserGroup(id) {
    this.router.navigateByUrl(`user-group/${id}`);
  }

  goToAdminPage(){
    this.router.navigateByUrl(`admin`);
  }

}
