import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { ResourceService } from 'src/app/core/services/resource.service';
import { StandardResponse } from 'src/app/interfaces';

export interface DeleteResourceInput {
  userGroupId: string;
  resourceId: string;
}

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-resource.component.html',
  styleUrls: ['./delete-resource.component.scss']
})
export class DeleteResourceComponent implements OnInit {
  public errorMessage: string;

  constructor(
    public dialogRef: MatDialogRef<DeleteResourceComponent>,
    // private resourceService: ResourceService,
    @Inject(MAT_DIALOG_DATA) public input: DeleteResourceInput
  ) {

  }

  ngOnInit(): void {
  }

  confirmDelete() {
    // this.resourceService.deleteResource(this.input.userGroupId, this.input.resourceId)
    // .subscribe((res: StandardResponse) => {
    //   if (res && res.success) {
    //     this.dialogRef.close();
    //   } else {
    //     this.errorMessage = res.message;
    //   }
    // });
  }

  cancelDelete() {
    this.dialogRef.close();
  }

}
