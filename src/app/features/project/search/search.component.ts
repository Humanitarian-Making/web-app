import { TagsRes } from '../../../interfaces';
import { TagService } from 'src/app/core/services/tag.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from 'src/app/core/services/language.service';
import { AddTagComponent, AddTagInput } from 'src/app/features/tag/add-tag/add-tag.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() updateSearchTags = new EventEmitter<string[]>();

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

  emitTagIds() {
    const tagIds = this.tags.map(tag => tag._id);
    this.updateSearchTags.emit(tagIds);
  }

  selectOrganisation(i) {
    this.tags.push(this.organisations[i]);
    this.emitTagIds();
  }

  selectSector(i) {
    this.tags.push(this.sectors[i]);
    this.emitTagIds();
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
        this.emitTagIds();
      }
    });
  }

  removeQueryItem(index) {
    this.tags.splice(index, 1);
    this.emitTagIds();
  }

}
