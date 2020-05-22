import { SelectUserGroupInput, SelectUserGroupComponent } from './../../user-group/select-user-group/select-user-group.component';
import { EditableTagRes, EditableTag, TagUpdateResponse, StandardResponse } from './../../../../functions/src/interfaces';
import { EditLanguageOptionComponent, EditLanguageOptionInput } from './../../shared/edit-language-option/edit-language-option.component';
import { TagService } from '../../services/tag.service';
import { LanguageService } from '../../services/language.service';
import { TagSnippet} from '../../../../functions/src/interfaces';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { CreateTagComponent } from '../create-tag/create-tag.component';
import { take, tap } from 'rxjs/operators';
import { ProjectService } from 'src/app/services/project.service';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit {
  tagId: string;
  tagSnippet: TagSnippet;
  user: User;
  tag;
  public imageURL: Observable<string>;
  public loading = true;
  public errorMessage: string;
  public projects$;
  public selectable = false;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public langService: LanguageService,
    private tagService: TagService,
    public dialog: MatDialog,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.authService.auth.user.subscribe((user) => {
      this.tagId = this.route.snapshot.paramMap.get('tagId');
      this.tagService.getEditableTag(this.tagId).subscribe((res: EditableTagRes) => {
        this.loading = false;
        if (res.success) {
          console.log(res);
          this.tag = res.tag;
          const storageRef = this.tag.imageURL ? this.tag.imageURL : '/images/hm-logo.png';
          this.imageURL = this.storage.ref(storageRef).getDownloadURL();
          this.tagSnippet = {
            id: this.tagId,
            name: this.tag.name,
            desc: this.tag.desc
          };
        } else {
          this.errorMessage = res.message;
        }
      });
    });
  }

  clickCancel() {
    this.router.navigateByUrl('tag/' + this.tagId + '');
  }

  clickSelectable(e) {
    console.log('e: ', e);
    this.tagService.editSelectable(this.tagId, e.checked)
      .subscribe((res: StandardResponse) => {
        console.log('res: ', res);
      });
  }

  clickCreateTag() {
    const tagDialog = this.dialog.open(CreateTagComponent, {
      width: '250px',
      data: { parent: this.tagSnippet }
    });

    tagDialog.afterClosed().subscribe(changes => {
      this.ngOnInit();
    });
  }

  clickEditName() {
    const input: EditLanguageOptionInput = {
      type: 'tag',
      field: 'name',
      fieldLabel: 'Name',
      id: this.tagId,
      array: this.tag.name
    };
    const editNameDialogRef = this.dialog.open(EditLanguageOptionComponent, {
      width: '90%',
      data: input
    });
    editNameDialogRef.afterClosed().subscribe(changes => {
      this.ngOnInit();
    });
  }

  clickEditDesc() {
    const input: EditLanguageOptionInput = {
      type: 'tag',
      field: 'desc',
      fieldLabel: 'Description',
      id: this.tagId,
      array: this.tag.desc
    };
    const editNameDialogRef = this.dialog.open(EditLanguageOptionComponent, {
      width: '90%',
      data: input
    });
    editNameDialogRef.afterClosed().subscribe(changes => {
      this.ngOnInit();
    });
  }

  goToTag(id) {
    this.router.navigateByUrl('tag/' + id)
    .then(() => {
      this.router.navigate(['tag/' + id]);
      this.ngOnInit();
    });
  }

  clickEditUserGroup() {
    const input: SelectUserGroupInput = {
      id: this.tagId,
      type: 'tag'
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
    moveItemInArray(this.tag.children, event.previousIndex, event.currentIndex);
  }

}
