import { LanguageService } from './../../../core/services/language.service';
import { StandardResponse } from './../../../interfaces';
import { LocationService } from './../../../core/services/location.service';
import { TagService } from './../../../core/services/tag.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { TagResourceType, TagResource } from 'src/app/interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { TagInput } from '../tag/tag.component';

enum State {
  view = 'view',
  search = 'search',
  loading = 'loading',
  error = 'error',
  selected = 'selected'
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./../tags.component.scss']
})
export class AddTagComponent implements OnInit {
  @Input() resource: TagResource;
  @Output() added = new EventEmitter();
  public state: State;
  public errorMessage;
  public tags;
  public searchControl = new FormControl();
  public filteredOptions: Observable<string[]>;
  public selectedTag;

  constructor(
    private projectService: ProjectService,
    private locationService: LocationService,
    private tagService: TagService,
    public lang: LanguageService
  ) { }

  ngOnInit(): void {
    this.state = State.view;
    this.tagService.getSelectable().subscribe((res: any) => {
      if (res && res.success) {
        this.tags = res.tags;
      }
    });
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name.text),
      map(value => this._filter(value))
    );
  }

  startAdd() {
    this.state = State.search;
  }

  cancelAdd() {
    this.selectedTag = null;
    this.state = State.view;
  }

  confirmAdd() {
    this.state = State.loading;
    this.getObservable(this.resource.id, this.selectedTag._id)
      .subscribe((res: StandardResponse) => {
        console.log('res :', res);
        if (res && res.success) {
          const newtag: TagInput = {
            resource: this.resource.type,
            resourceId: this.resource.id,
            edit: true,
            populated: true,
            tagId: this.selectedTag._id,
            name: [this.selectedTag.name],
            parent: this.selectedTag.parent
            // desc: this.selectedTag.desc
          };
          console.log('newtag :', newtag);

          this.added.emit(newtag);
         
          this.state = State.view;
        } else {
          this.errorMessage = res.message;
          this.state = State.error;
        }
      });

  }

  selected(e) {
    console.log('selected :', e);
    this.searchControl.setValue('');
    this.selectedTag = e.option.value;
    this.state = State.selected;
  }

  getObservable(resourceId, tagId): Observable<StandardResponse> {
    console.log('tagId :', tagId);
    console.log('resourceId :', resourceId);
    this.state = State.loading;
    switch (this.resource.type) {
      case TagResourceType.project:
        console.log('project');
        return this.projectService.addTagToProject(resourceId, tagId);
      case TagResourceType.location:
        console.log('location');
        // return this.locationService.add (resourceId, tagId);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tags.filter(tag => tag.name.text.toLowerCase().indexOf(filterValue) === 0);
  }

}
