import { CreateTagObject, CreateRootTagObject } from './../../../../functions/src/interfaces';
import { Component, Inject } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { LanguageService } from 'src/app/services/language.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TagSnippet } from 'functions/src/interfaces';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

export interface CreateTagDialogData {
  parent: TagSnippet | null;
}

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.scss']
})
export class CreateTagComponent {
  userGroupRequired = false;
  userGroups;
  createTagForm = new FormGroup({
    userGroup: new FormControl(''),
    name: new FormControl(''),
    desc: new FormControl('')
  });
  constructor(
    public dialogRef: MatDialogRef<CreateTagComponent>,
    private tagService: TagService,
    public langService: LanguageService,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: CreateTagDialogData
    ) {
      if (this.data.parent === null) {
        this.userGroupRequired = true;
        this.authService.getUserGroups(true).subscribe((res) => {
          if (res.success) {
            this.userGroups = res.userGroupRoles;
          }
        });
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createTag() {
    console.log('tagToCreate: ', this.data);
    if (this.data.parent === null) {
      const rootTagToCreate: CreateRootTagObject = {
        name: [this.langService.createOption(this.createTagForm.value.name)],
        desc: [this.langService.createOption('Test')],
        selectable: false,
        userGroupId: this.createTagForm.value.userGroup // need to add
      };
      this.tagService.createRootTag(rootTagToCreate)
      .then((res) => {
        console.log('result: ', res);
        this.dialogRef.close();
      })
      .catch((err) => {
        console.log('error: ', err);
        this.dialogRef.close();
      });

    } else {
      const tagToCreate: CreateTagObject = {
        name: [this.langService.createOption(this.createTagForm.value.name)],
        desc: [this.langService.createOption('Test')],
        parentId: this.data.parent.id,
        selectable: false
      };
      this.tagService.createTag(tagToCreate)
      .then((res) => {
        console.log('result: ', res);
        this.dialogRef.close();
      })
      .catch((err) => {
        console.log('error: ', err);
        this.dialogRef.close();
      });
    }
  }

}
