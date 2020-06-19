import { LocationService } from 'src/app/core/services/location.service';
import { FormControl, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/core/services/language.service';
import {
  Component,
  OnInit,
  Input,
  Directive,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserGroupService } from 'src/app/core/services/user-group.service';
import { StandardResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-user-group-locations',
  templateUrl: './user-group-locations.component.html',
  styleUrls: ['./user-group-locations.component.scss'],
})
export class UserGroupLocationsComponent implements OnInit {
  public loading: boolean;
  public userGroupId: string;
  public userGroup;
  public locations;
  public errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    public langService: LanguageService,
    private userGroupService: UserGroupService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.userGroupId = this.route.snapshot.paramMap.get('userGroupId');
    this.userGroupService
      .getLocations(this.userGroupId)
      .subscribe((res: any) => {
        console.log('res :', res);
        this.loading = false;
        if (res.success) {
          this.userGroup = res.userGroupLocations;
          this.locations = res.userGroupLocations.locations;
          this.errorMessage = null;
        } else {
          this.errorMessage = res.message;
          this.userGroup = null;
          this.locations = null;
        }
      });
  }
}

@Component({
  selector: '[app-location-row]',
  template: `
    <td class="table-text" app-location-name [name]="location.name" [id]="location._id"></td>
    <td class="table-text" app-location-desc-array [descArray]="location.desc" [id]="location._id"></td>
    <td class="table-text" app-location-website [website]="location.websiteUrl" [id]="location._id"></td>
    <td class="table-text">{{ location.location.coordinates[1] }}</td>
    <td class="table-text">{{ location.location.coordinates[0] }}</td>
  `,
  styleUrls: ['./user-group-locations.component.scss'],
})
export class UserGroupLocationRowComponent implements OnInit  {
  @Input() location;
  constructor(public langService: LanguageService) {
    console.log(this.location);
  }

  ngOnInit(): void {
    console.log('location:', this.location);
  }
}

@Component({
  selector: '[app-location-name]',
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
  styleUrls: ['./user-group-locations.component.scss'],
})
export class UserGroupLocationNameComponent {
  @Input() name;
  @Input() id;
  public edit: boolean;
  public errorMessage;
  nameForm: FormControl;
  constructor(public langService: LanguageService, private locationService: LocationService) {
    this.edit = false;
    this.nameForm = new FormControl('', Validators.required);
    this.nameForm.setValue(this.name);
  }

  toggleEdit() {
    this.nameForm.setValue(this.name);
    this.edit = !this.edit;
  }

  editName() {
    this.locationService.editName(this.id, this.nameForm.value).subscribe((res: StandardResponse) => {
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



@Component({
  selector: '[app-location-website]',
  template: `
    <div *ngIf="!edit" fxLayout="row" fxLayoutAlign="space-between center">
      <p>{{ website }}</p>
      <button mat-button matSuffix mat-icon-button aria-label="Edit" (click)="toggleEdit()">
        <mat-icon>edit</mat-icon>
      </button>
    </div>
    <form *ngIf="edit">
      <mat-form-field class="example-full-width">
        <mat-label>Website</mat-label>
        <input matInput maxlength="300" [formControl]="websiteForm" />
        <mat-hint align="end">{{websiteForm.value.length}} / 300</mat-hint>
      </mat-form-field>
        <button mat-button matSuffix mat-icon-button aria-label="Save" [disabled]="!websiteForm.valid" (click)="editWebsite()">
         <mat-icon>done</mat-icon>
        </button>
        <button mat-button matSuffix mat-icon-button aria-label="Clear" (click)="toggleEdit()">
        <mat-icon>close</mat-icon>
       </button>
    </form>
  `,
  styleUrls: ['./user-group-locations.component.scss'],
})
export class UserGroupLocationWebsiteComponent {
  @Input() website;
  @Input() id;
  public edit: boolean;
  public errorMessage;
  websiteForm: FormControl;
  constructor(public langService: LanguageService, private locationService: LocationService) {
    this.edit = false;
    this.websiteForm = new FormControl('');
    this.websiteForm.setValue(this.website);
  }

  toggleEdit() {
    this.websiteForm.setValue(this.website);
    this.edit = !this.edit;
  }

  editWebsite() {
    this.locationService.editWebsite(this.id, this.websiteForm.value).subscribe((res: StandardResponse) => {
      console.log('res :', res);
      if (res && res.success) {
        this.edit = false;
        this.website = this.websiteForm.value;
      } else {
        this.errorMessage = res.message;
      }
    });
  }
}