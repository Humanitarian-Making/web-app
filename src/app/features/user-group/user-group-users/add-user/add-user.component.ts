import { StandardResponse } from '../../../../interfaces';
import { UserGroupService } from 'src/app/core/services/user-group.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserGroupRoleLabel } from 'src/app/interfaces';
import { ErrorStateMatcher } from '@angular/material/core';

export interface AddUserGroupUserInput {
  userGroupId: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class AddUserErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  public errorMessage: string;
  public addUserForm = new FormGroup({
    email:  new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    role: new FormControl('', [
      Validators.required,
    ])
  });
  emailFormControl = this.addUserForm.controls.email;
  roleFormControl = this.addUserForm.controls.role;

  roles: UserGroupRoleLabel[];
  emailMatcher = new AddUserErrorStateMatcher();


  constructor(
    private userGroupService: UserGroupService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public input: AddUserGroupUserInput
  ) {
    this.roles = this.userGroupService.roles;
  }

  clickAddUser() {
    console.log(this.addUserForm);
    this.userGroupService.addUser(this.input.userGroupId, this.addUserForm.value.email, this.addUserForm.value.role)
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
