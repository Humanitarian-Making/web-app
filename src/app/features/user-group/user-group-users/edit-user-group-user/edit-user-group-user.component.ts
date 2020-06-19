import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserGroupService } from 'src/app/core/services/user-group.service';
import { StandardResponse } from 'src/app/interfaces';

export interface EditUserGroupUserInput {
  userId: string;
  email: string;
  displayName: string;
  userGroupId: string;
  userGroupName: string;
  newUserRole: string;
}

@Component({
  selector: 'app-edit-user-group-user',
  templateUrl: './edit-user-group-user.component.html',
  styleUrls: ['./edit-user-group-user.component.scss']
})
export class EditUserGroupUserComponent {
  public errorMessage: string;
  constructor(
    private userGroupService: UserGroupService,
    public dialogRef: MatDialogRef<EditUserGroupUserComponent>,
    @Inject(MAT_DIALOG_DATA) public input: EditUserGroupUserInput) { }


  clickConfirm() {
    this.userGroupService.editUserRole(this.input.userGroupId, this.input.userId, this.input.newUserRole)
    .subscribe((res: StandardResponse) => {
      console.log('res :', res);
      if (res && res.success) {
        this.dialogRef.close(true);
      } else {
        this.errorMessage = res.message;
      }
    });
  }

  clickCancel() {
    this.dialogRef.close(false);
  }

}
