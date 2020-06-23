import { TagResourceType } from './../../interfaces';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TagLayout, TagsConfig } from 'src/app/interfaces';
import { TagInput } from './tag/tag.component';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnChanges {
  @Input() public config: TagsConfig;
  public tags: TagInput[] = [];
  constructor() { }

  ngOnChanges(): void {
    console.log('this.config :', this.config);

    if (!this.config.populated) {
      this.tags = this.config.tags.map((tag) => {
        return {
          resource: TagResourceType.project,
          resourceId: this.config.resource.id,
          edit: this.config.edit,
          populated: false,
          tagId: tag._id,
          name: tag.name,
          desc: tag.desc,
          parent: tag.parent
        };
      });
    } else {
      this.tags = this.config.tags.map((tag) => {
        return {
          resource: TagResourceType.project,
          resourceId: this.config.resource.id,
          edit: this.config.edit,
          populated: true,
          tagId: tag._id,
          name: tag.name,
          desc: tag.desc,
          parent: tag.parent
        };
      });
      console.log(this.tags);

    }
  }

  addTag(tag: TagInput) {
    console.log('addTag tag:', tag);
    this.tags.push(tag);
  }

  removeTag(tagId) {
    console.log('removeTag tagId :', tagId);
    const index = this.tags.findIndex((tag) => tag.tagId);
    this.tags.splice(index, 1);
  }

}
