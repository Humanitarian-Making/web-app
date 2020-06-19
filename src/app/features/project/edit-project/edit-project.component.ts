import { GetEditableProjectRes, StandardResponse } from '../../../interfaces';
import { TagService } from '../../../core/services/tag.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../core/services/project.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { MatDialog } from '@angular/material/dialog';
import { EditLanguageOptionComponent, EditLanguageOptionInput } from 'src/app/shared/edit-language-option/edit-language-option.component';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SelectUserGroupInput, SelectUserGroupComponent } from 'src/app/shared/select-user-group/select-user-group.component';
import { AddTagComponent, AddTagInput } from 'src/app/features/tag/add-tag/add-tag.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  project;
  projectId;
  errorMessage: string;
  loading = false;
  projectCategories = [];
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private projectService: ProjectService,
    private tagService: TagService,
    public langService: LanguageService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.auth.user.subscribe((user) => {
      this.projectId = this.route.snapshot.paramMap.get('projectId');
      this.loading = true;
      this.projectService.getProjectToEdit(this.projectId)
        .pipe(
          map((res: any) => {
            if (res.success && res.project) {
              const newTags = res.project.tags.filter((tag) => {
                if (Object.keys(tag).length !== 0) {
                  return tag;
                }
              });
              console.log('res: ', res);
              res.project.tags = newTags;
              return res;
            }
          })
        )
        .subscribe((res: GetEditableProjectRes) => {
          console.log('res: ', res);
          if (res.success) {
            this.project = res.project;
            this.loading = false;
          } else {
            this.errorMessage = res.message;
            this.loading = false;
          }
        });
    });
  }

  clickEditName() {
    const input: EditLanguageOptionInput = {
      type: 'project',
      field: 'name',
      fieldLabel: 'Name',
      id: this.projectId,
      array: this.project.name
    };
    const editDialogRef = this.dialog.open(EditLanguageOptionComponent, {
      width: '90%',
      data: input
    });
    editDialogRef.afterClosed().subscribe(changes => {
      if (changes) {
        console.log('Edited Name Language Options: ', changes);
      }
    });
  }

  clickEditDesc() {
    const input: EditLanguageOptionInput = {
      type: 'project',
      field: 'desc',
      fieldLabel: 'Description',
      id: this.projectId,
      array: this.project.desc
    };
    const editDialogRef = this.dialog.open(EditLanguageOptionComponent, {
      width: '90%',
      data: input
    });
    editDialogRef.afterClosed().subscribe(changes => {
      if (changes) {
        console.log('Edited Name Language Options: ', changes);
      }
    });
  }

  clickEditUserGroup() {
    const input: SelectUserGroupInput = {
      id: this.projectId,
      type: 'project'
    };
    const editUserGroupDialog = this.dialog.open(SelectUserGroupComponent, {
      width: '300px',
      data: input
    });
    editUserGroupDialog.afterClosed().subscribe(changes => {
      this.ngOnInit();
    });
  }

  reorderTags(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.project.tags, event.previousIndex, event.currentIndex);
  }

  addTag() {
    const input: AddTagInput = {
      type: 'project',
      id: this.projectId
    };
    const addTagDiologRef = this.dialog.open(AddTagComponent, {
      width: '250px',
      data: input
    });

    addTagDiologRef.afterClosed().subscribe(tagRef => {
      console.log('Tag to Add: ', tagRef);
      this.ngOnInit();
    });
  }

  removeTag(i) {
    const tagId = this.project.tags[i]._id;
    this.projectService.removeTag(this.projectId, tagId).subscribe((res: StandardResponse) => {
      if (res.success) {
        this.project.tags.splice(i, 1);
      }
    });
  }

  clickCancel() {
    this.router.navigateByUrl('project/' + this.projectId + '');
  }

}
