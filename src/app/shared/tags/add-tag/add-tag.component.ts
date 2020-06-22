import { ProjectService } from 'src/app/core/services/project.service';
import { StandardResponse, TagResourceType, TagResource } from 'src/app/interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

enum State {
  view = 'view',
  adding = 'adding',
  loading = 'loading',
  error = 'error'
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {
  @Input() resource: TagResource;
  @Output() added = new EventEmitter();
  public state: State;
  public errorMessage;
  public searchControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.state = State.view;
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  startAdd() {
    this.state = State.adding;
  }

  cancelAdd() {
    this.state = State.view;
  }

  clickAdd() {
    this.state = State.loading;
    switch (this.resource.type) {
      case TagResourceType.project:
        console.log('proejct');
        break;
        // this.projectService.addTagToProject(this.resource.id, '')
      case TagResourceType.location:
        console.log('location');
        break;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
