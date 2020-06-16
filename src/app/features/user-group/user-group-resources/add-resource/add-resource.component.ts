import { StandardResponse, AddResource } from 'src/app/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ResourceService } from 'src/app/core/services/resource.service';
import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';

export interface AddResourceInput {
  userGroupId: string;
}

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent {
  public loading;
  public addResourceForm: FormGroup;
  public resourceTypes;
  public resourceId: string;
  public errorMessage: string = null;
  private resourceUrl: string = null;
  public linear = true;
  @ViewChild('stepper', {static: false}) public stepper: MatStepper;

  constructor(
    public dialogRef: MatDialogRef<AddResourceComponent>,
    // private resourceService: ResourceService,
    @Inject(MAT_DIALOG_DATA) public input: AddResourceInput
  ) {
    // this.resourceTypes = this.resourceService.resourceTypes;
    console.log('this.input :', this.input);
    this.addResourceForm = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      resourceUrl: new FormControl('', Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  clickAddResource() {
    console.log('this.addResourceForm: ', this.addResourceForm);
    const addResource: AddResource = {
      name: this.addResourceForm.controls.name.value,
      desc: this.addResourceForm.controls.desc.value,
      resourceUrl: this.addResourceForm.controls.resourceUrl.value,
      type: this.addResourceForm.controls.type.value,
    };
    // this.resourceService.addResource(this.input.userGroupId, addResource).subscribe((res: StandardResponse) => {
    //   if (res && res.success) {
    //     this.stepper.next();
    //   } else {
    //     this.errorMessage = res.message;
    //   }
    // });
  }

  resourceUploaded(e) {
    this.resourceUrl = e;
    console.log('this.resourceUrl :', this.resourceUrl);

    this.stepper.next();
    this.addResourceForm.controls.resourceUrl.setValue(e);
  }
}
