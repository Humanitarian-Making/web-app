import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserGroupService } from 'src/app/core/services/user-group.service';
import { StandardResponse } from 'src/app/interfaces';


export interface RemoveUserGroupUserInput {
  userId: string;
  email: string;
  displayName: string;
  userGroupId: string;
  userGroupName: string;
}

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent {
  public errorMessage: string;

  constructor(
    private userGroupService: UserGroupService,
    public dialogRef: MatDialogRef<RemoveUserComponent>,
    @Inject(MAT_DIALOG_DATA) public input: RemoveUserGroupUserInput
  ) { }

  clickConfirm() {
    this.userGroupService.removeUser(this.input.userGroupId, this.input.userId)
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
