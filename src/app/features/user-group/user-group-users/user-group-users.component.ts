import { EditUserGroupUserComponent } from './edit-user-group-user/edit-user-group-user.component';
import { AddUserComponent, AddUserGroupUserInput } from './add-user/add-user.component';
import { Component, OnInit } from '@angular/core';
import { UserGroupService } from 'src/app/core/services/user-group.service';
import { ActivatedRoute } from '@angular/router';
import { UserGroupRoleLabel } from 'src/app/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { RemoveUserComponent, RemoveUserGroupUserInput } from './remove-user/remove-user.component';
import { EditUserGroupUserInput } from './edit-user-group-user/edit-user-group-user.component';

@Component({
  selector: 'app-user-group-users',
  templateUrl: './user-group-users.component.html',
  styleUrls: ['./user-group-users.component.scss']
})
export class UserGroupUsersComponent implements OnInit {
  public loading: boolean;
  public userGroupId: string;
  public userGroup;
  public roles: UserGroupRoleLabel[];
  public errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private userGroupService: UserGroupService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.userGroupId = this.route.snapshot.paramMap.get('userGroupId');
    this.roles = this.userGroupService.roles;
    this.userGroupService.getUsers(this.userGroupId).subscribe((res: any) => {
      this.loading = false;
      if (res.success) {
        this.userGroup = res.userGroupUsers;
        this.errorMessage = null;
      } else {
        this.errorMessage = res.message;
        this.userGroup = null;
      }
    });
  }

  clickAddUser() {
    console.log('clickAddUser');
    const input: AddUserGroupUserInput = {
      userGroupId: this.userGroupId
    };
    const editDialogRef = this.dialog.open(AddUserComponent, {
      width: '300px',
      data: input
    });
    editDialogRef.afterClosed().subscribe((added) => {
      if (added) {
        this.ngOnInit();
      }
    });
  }

  clickRemoveUser(userId, email, displayName) {
    console.log('userId, email, displayName :', userId, email, displayName);
    const input: RemoveUserGroupUserInput = {
      userId,
      email,
      displayName,
      userGroupId: this.userGroupId,
      userGroupName: this.userGroup.name
    };
    const removeUserDialogRef = this.dialog.open(RemoveUserComponent, {
      width: '300px',
      data: input
    });
    removeUserDialogRef.afterClosed().subscribe((added) => {
      if (added) {
        this.ngOnInit();
      }
    });
  }

  clickEditUserRole(userId, email, displayName, newUserRole) {
    console.log('userId, email, displayName :', userId, email, displayName);
    const input: EditUserGroupUserInput = {
      userId,
      email,
      displayName,
      newUserRole,
      userGroupId: this.userGroupId,
      userGroupName: this.userGroup.name,
    };
    const removeUserDialogRef = this.dialog.open(EditUserGroupUserComponent, {
      width: '300px',
      data: input
    });
    removeUserDialogRef.afterClosed().subscribe((added) => {
      if (added) {
        this.ngOnInit();
      }
    });
  }

}
