import { StandardResponse } from './../../../../functions/src/interfaces';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageOptionRef, LanguageOption } from 'functions/src/interfaces';
import { LanguageService } from 'src/app/services/language.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TagService } from 'src/app/services/tag.service';
import { ProjectService } from 'src/app/services/project.service';
import { map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';




interface EditLanguageOption extends LanguageOption {
  status: string;
}

export interface EditLanguageOptionInput {
  type: string;
  field: string;
  id: string;
  fieldLabel: string;
  array: LanguageOption[];
}

@Component({
  selector: 'app-edit-language-option',
  templateUrl: './edit-language-option.component.html',
  styleUrls: ['./edit-language-option.component.scss']
})
export class EditLanguageOptionComponent {
  public languages = [];
  public optionForm = new FormGroup({
    language: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required)
  });
  public array: EditLanguageOption[] = [];
  public errorMessage: string;

  private pipeTransform = pipe(
    map((res: any) => {
      if (res.success) {
        this.dialogRef.close(this.input);
      } else {
        this.errorMessage = res.message;
      }
    })
  );

  constructor(
    public dialogRef: MatDialogRef<EditLanguageOptionComponent>,
    public langService: LanguageService,
    private tagService: TagService,
    private projectService: ProjectService,
    @Inject(MAT_DIALOG_DATA) public input: EditLanguageOptionInput
  ) {
    this.languages = this.langService.getAvailLanguages();
    this.array = this.input.array.map((opt, i) => {
      return {
        ...opt,
        status: 'display',
      };
    });
    this.array.push({
      text: '',
      language: '',
      status: 'add'
    });
  }

  ensureArrayOrdering() {
    const newOrder = this.array.filter((i) => {
      if (i.status !== 'add' ) {
        return i;
      }
    });
    newOrder.push({
      text: '',
      language: '',
      status: 'add'
    });
    this.array = newOrder;
  }

  startAddOption() {
    this.array[this.array.length - 1 ].status = 'edit';
    this.ensureArrayOrdering();
  }

  startEditOption(i) {
    console.log('startEditOption: ', i);
    this.array[i].status = 'edit';
    this.ensureArrayOrdering();

  }
  cancelEditOption(i) {
    console.log('cancelEditOption: ', i);
    this.array[i].status = 'display';
    this.ensureArrayOrdering();
  }

  deleteOption(i) {
    console.log('deleteOption: ', i);
    this.array.splice(i, 1);
    this.ensureArrayOrdering();
  }

  confirmEditOption(i) {
    const text = this.optionForm.value.text;
    const language = this.optionForm.value.language;
    this.optionForm.reset();
    console.log('confirmEditOption: ', i, language, text);
    this.array[i] = {
      language,
      text,
      status: 'display'
    };
    this.ensureArrayOrdering();
  }

  confirmEdit() {
    const changes: LanguageOption[] = this.array
      .filter(i => i.status === 'display')
      .map(i => {
        return {
          text: i.text,
          language: i.language
        };
      });
    console.log('confirmEdit: ', this.input.type, this.input.field, changes);
    this.input.array = changes;
    let updateObs: Observable<any> = null;
    if (this.input.type === 'project') {
      if (this.input.field === 'name') {
        updateObs = this.projectService.editName(this.input.id, this.input.array);
      }
      if (this.input.field === 'desc') {
        updateObs = this.projectService.editDesc(this.input.id, this.input.array);
      }
    }
    if (this.input.type === 'tag') {
      if (this.input.field === 'name') {
        updateObs = this.tagService.editName(this.input.id, this.input.array);
      }
      if (this.input.field === 'desc') {
        updateObs = this.tagService.editDesc(this.input.id, this.input.array);
      }
    }
    updateObs
      .subscribe(
        (res: any) => {
          console.log('res: ', res);
          if (res.success) {
            this.cancelEdit();
          } else {
            this.errorMessage = res.message;
          }
        },
        (err) => {
          console.log('err: ', err);
          // this.errorMessage = err;
        }
      );
  }

  cancelEdit() {
    this.dialogRef.close(null);
  }

}
