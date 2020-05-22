import { AuthService } from 'src/app/services/auth.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageOptionRef, LanguageOption, UserUserGroup, StandardResponse } from './../../interfaces';
import { LanguageService } from 'src/app/services/language.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserGroupService } from 'src/app/services/user-group.service';

export interface SelectUserGroupInput {
  type: string;
  id: string;
}

@Component({
  selector: 'app-select-user-group',
  templateUrl: './select-user-group.component.html',
  styleUrls: ['./select-user-group.component.scss']
})
export class SelectUserGroupComponent {
  public errorMessage: string;
  public userGroups: UserUserGroup[] = [];
  public userGroupForm = new FormGroup({
    userGroup: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<SelectUserGroupComponent>,
    private authService: AuthService,
    private userGroupService: UserGroupService,
    @Inject(MAT_DIALOG_DATA) public input: SelectUserGroupInput
  ) {
    this.authService.getUserGroups(true).subscribe((res) => {
      this.userGroups = res;
    });
  }

  clickUpdateUserGroup() {
    if (this.userGroupForm.value.userGroup !== null) {
      this.userGroupService.updateResourceUser(this.input.type, this.input.id, this.userGroupForm.value.userGroup )
      .subscribe((res: StandardResponse) => {
        if (res.success) {
          this.dialogRef.close(null);
        } else {
          this.errorMessage = res.message;
        }
      });
    }
  }

  clickCancel() {
    this.dialogRef.close(null);
  }

}
