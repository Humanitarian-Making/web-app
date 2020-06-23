import { FormControl } from '@angular/forms';
import { TagsRes } from '../../../interfaces';
import { TagService } from 'src/app/core/services/tag.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from 'src/app/core/services/language.service';
import { AddTagComponent, AddTagInput } from 'src/app/features/tag/add-tag/add-tag.component';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() updateSearch = new EventEmitter<{text: string, tagIds: string[]}>();
  public textSearchControl: FormControl = new FormControl('');

  tags: any[];
  organisations: any[];
  sectors: any[];

  constructor(
    private projectService: ProjectService,
    public addTagDialog: MatDialog,
    private tagService: TagService,
    public langService: LanguageService
  ) {}

  ngOnInit(): void {
    this.tags = [];
    this.textSearchControl = new FormControl('');
    this.textSearchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.update();
      });

    this.tagService.getOfType('organisation').subscribe((res: TagsRes) => {
      if (res.success) {
        this.organisations = res.tags;
      }
    });
    this.tagService.getOfType('sector').subscribe((res: TagsRes) => {
      if (res.success) {
        this.sectors = res.tags;
      }
    });
  }

  update() {
    const tagIds = this.tags.map(tag => tag._id);
    this.updateSearch.emit({text: this.textSearchControl.value, tagIds});
  }

  selectOrganisation(i) {
    this.tags.push(this.organisations[i]);
    this.update();
  }

  selectSector(i) {
    this.tags.push(this.sectors[i]);
    this.update();
  }

  clickAddTag() {
    const input: AddTagInput = {
      type: 'query'
    };
    const addTagDiologRef = this.addTagDialog.open(AddTagComponent, {
      width: '250px',
      data: input
    });

    addTagDiologRef.afterClosed().subscribe(tag => {
      if (tag) {
        this.tags.push(tag);
        this.update();
      }
    });
  }

  removeQueryItem(index) {
    this.tags.splice(index, 1);
    this.update();
  }

}
