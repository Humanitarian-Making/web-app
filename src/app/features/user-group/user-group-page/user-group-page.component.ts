import { UserGroupService } from '../../../core/services/user-group.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from 'src/app/core/services/language.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-group-page',
  templateUrl: './user-group-page.component.html',
  styleUrls: ['./user-group-page.component.scss']
})
export class UserGroupPageComponent implements OnInit {
  public userGroupId: string;
  public userGroup: any; // need to add type
  public loading: boolean;
  public errorMessage: string;

  public projectColumns = ['name', 'desc', 'created', 'updated', 'published', 'tags' ];

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userGroupService: UserGroupService,
    public langService: LanguageService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.userGroupId = this.route.snapshot.paramMap.get('userGroupId');
    console.log('this.userGroupId :', this.userGroupId);
    this.authService.auth.user.subscribe((user) => {
      this.userGroupService.get(this.userGroupId).subscribe((res: any) => {
        console.log('res :', res);
        this.loading = false;
        if (res.success) {
          this.userGroup = res.userGroup;
        } else {
          this.errorMessage = res.message;
        }
      });
    });
  }

  goTo(resource) {
    this.router.navigateByUrl(`user-group/${this.userGroupId}/${resource}`);
  }
}
