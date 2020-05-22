import { StandardResponse, TagsRes, TagRes } from './../../../../functions/src/interfaces';
import { Component, Inject } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageService } from 'src/app/services/language.service';
import { tap } from 'rxjs/operators';
import { ProjectService } from 'src/app/services/project.service';

export interface AddTagInput {
  type: string;
  id?: string;
}

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent {
  parentTags;
  errorMessage: string;
  tagId;
  tags;
  addTagForm = new FormGroup({
    parent: new FormControl(''),
    tag: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<AddTagComponent>,
    private tagService: TagService,
    private projectService: ProjectService,
    public langService: LanguageService,
    @Inject(MAT_DIALOG_DATA) public input: AddTagInput
  ) {
      this.tagService.getAllParentTags().subscribe((res: TagsRes) => {
        if (res.success && res.tags) {
          this.parentTags = res.tags;
        }
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectParent(id) {
    console.log(this.addTagForm.value);
    this.tags = this.tagService.getChildren(id).subscribe((res: TagsRes) => {
      if (res.success && res.tags) {
        this.tags = res.tags;
      }
    });
  }

  selectChild(id) {
    this.tagId = id;
  }

  addTag() {
    console.log('this.tagId: ', this.tagId);
    if (this.input.type === 'query') {
      this.tagService.getTag(this.tagId).subscribe((res: TagRes) => {
        if (res.success) {
          this.dialogRef.close(res.tag);
        } else {
          this.errorMessage = res.message;
        }
      });
    } else if (this.input.type === 'project') {
      this.projectService.addTagToProject(this.input.id, this.tagId).subscribe((res: StandardResponse) => {
        if (res.success) {
          this.dialogRef.close(this.tagId);
        } else {
          this.errorMessage = res.message;
        }
      });
    }
  }
}
