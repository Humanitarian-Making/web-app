import { LocationService } from './../../../core/services/location.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { TagResource, TagResourceType, StandardResponse, LanguageOption } from './../../../interfaces';
import { LanguageService } from './../../../core/services/language.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export interface TagInput {
  resource: TagResourceType;
  resourceId: string;
  edit: boolean;
  populated: boolean;
  tagId: string;
  name?: LanguageOption[];
  desc?: LanguageOption[];
  parent?: {
    _id: string;
    name?: LanguageOption[];
    desc?: LanguageOption[];
  };
}

enum State {
  view = 'view',
  confirmDelete = 'confirmDelete',
  loading = 'loading',
  error = 'error'
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./../tags.component.scss']
})
export class TagComponent implements OnInit {
  public state: State = State.view;
  public errorMessage: string;
  @Input() tag: TagInput;
  @Output() removed = new EventEmitter();
  constructor(
    public lang: LanguageService,
    private projectService: ProjectService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    console.log('this.tag :', this.tag);

    if (!this.tag.populated) {
      console.log('unpopulated');
    }
  }

  clickDelete() {
    this.state = State.confirmDelete;
  }

  cancelDelete() {
    this.state = State.view;
  }

  confirmDelete() {
    this.getDeleteObservable(this.tag.resourceId, this.tag.tagId)
      .subscribe((res: StandardResponse) => {
        console.log('res :', res);
        if (res && res.success) {
          this.removed.emit(this.tag.tagId);
          this.state = State.view;
        } else {
          this.errorMessage = res.message;
          this.state = State.error;
        }
      });
  }

  getDeleteObservable(resourceId, tagId): Observable<StandardResponse> {
    console.log('tagId :', tagId);
    console.log('resourceId :', resourceId);
    this.state = State.loading;
    switch (this.tag.resource) {
      case TagResourceType.project:
        console.log('project');
        return this.projectService.removeTag(resourceId, this.tag.tagId);
      case TagResourceType.location:
        console.log('location');
        // return this.locationService.add (resourceId, tagId);
    }
  }

}
