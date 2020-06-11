import { ResourceService } from 'src/app/core/services/resource.service';
import { FormControl, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/core/services/language.service';
import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandardResponse } from 'src/app/interfaces';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteResourceComponent, DeleteResourceInput } from './delete-resource/delete-resource.component';

@Component({
  selector: 'app-user-group-resources',
  templateUrl: './user-group-resources.component.html',
  styleUrls: ['./user-group-resources.component.scss'],
})
export class UserGroupResourcesComponent implements OnInit {
  public loading: boolean;
  public userGroupId: string;
  public userGroup;
  public resources;
  public errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    public langService: LanguageService,
    private resourceService: ResourceService,
    private createResourceDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.userGroupId = this.route.snapshot.paramMap.get('userGroupId');
    this.resourceService
      .getUserGroupResources(this.userGroupId)
      .subscribe((res: any) => {
        console.log('res :', res);
        this.loading = false;
        if (res.success) {
          this.userGroup = res.userGroupResources;
          this.resources = res.userGroupResources.resources;
          this.errorMessage = null;
        } else {
          this.errorMessage = res.message;
          this.userGroup = null;
          this.resources = null;
        }
      });
  }

  clickAddResource() {
    const input = {
      userGroupId: this.userGroupId
    };
    console.log('input :', input);

    const addTagDiologRef = this.createResourceDialog.open(AddResourceComponent, {
      width: '50%',
      data: input
    });

    addTagDiologRef.afterClosed().subscribe((res) => {
      this.ngOnInit();
    });
  }


}

@Component({
  selector: '[app-resource-row]',
  template: `
    <td class="table-text" app-resource-name [name]="resource.name" [userGroupId]="userGroupId" [resourceId]="resource._id"></td>
    <td class="table-text">{{langService.getLanguageOption(resource.desc)}}</td>
    <td class="table-text">{{resource.type}}</td>
    <td class="table-text">{{resource.resourceUrl}}</td>
    <td class="table-text">
      <button mat-mini-fab color="primary" aria-label="Delete Resource" (click)="clickDeleteResource()">
        <mat-icon>delete</mat-icon>
      </button>
    </td>
  `,
  styleUrls: ['./user-group-resources.component.scss'],
})
export class UserGroupResourceRowComponent implements OnInit  {
  @Input() resource;
  @Input() userGroupId;

  constructor(
    public langService: LanguageService,
    private deleteResourceDialog: MatDialog
  ) {
    console.log(this.resource);
  }

  ngOnInit(): void {
    console.log('resource:', this.resource);
  }

  clickDeleteResource() {
    const input: DeleteResourceInput = {
      userGroupId: this.userGroupId,
      resourceId: this.resource._id
    };
    console.log('input :', input);

    const deleteTagDialogRef = this.deleteResourceDialog.open(DeleteResourceComponent, {
      width: '250px',
      data: input
    });

    deleteTagDialogRef.afterClosed().subscribe((res) => {
      this.ngOnInit();
    });
  }
}

@Component({
  selector: '[app-resource-name]',
  template: `
    <div fxLayout="row" fxLayoutAlign="space-between center">
      <div *ngIf="!edit" class="name-text">{{ name }}</div>
      <form *ngIf="edit">
      <mat-form-field class="name-form">
        <mat-label>Name</mat-label>
        <input matInput maxlength="50" [formControl]="nameForm" />
        <mat-hint align="end">{{nameForm.value.length}} / 50</mat-hint>
      </mat-form-field>
    </form>
      <button *ngIf="!edit" mat-button matSuffix mat-icon-button aria-label="Edit" (click)="toggleEdit()">
        <mat-icon>edit</mat-icon>
      </button>
      <button *ngIf="edit" mat-button matSuffix mat-icon-button aria-label="Save" [disabled]="!nameForm.valid" (click)="editName()">
         <mat-icon>done</mat-icon>
      </button>
      <button *ngIf="edit" mat-button matSuffix mat-icon-button aria-label="Clear" (click)="toggleEdit()">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styleUrls: ['./user-group-resources.component.scss'],
})
export class UserGroupResourceNameComponent {
  @Input() name;
  @Input() resourceId;
  @Input() userGroupId;
  public edit: boolean;
  public errorMessage;
  nameForm: FormControl;
  constructor(
    public langService: LanguageService,
    private resourceService: ResourceService
  ) {
    this.edit = false;
    this.nameForm = new FormControl('', Validators.required);
    this.nameForm.setValue(this.name);
  }

  toggleEdit() {
    this.nameForm.setValue(this.name);
    this.edit = !this.edit;
  }

  editName() {
    this.resourceService.editName(this.userGroupId, this.resourceId, this.nameForm.value).subscribe((res: StandardResponse) => {
      console.log('res :', res);
      if (res && res.success) {
        this.edit = false;
        this.name = this.nameForm.value;
      } else {
        this.errorMessage = res.message;
      }
    });
  }
}
