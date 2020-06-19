import { Component, OnInit, Input } from '@angular/core';
import { TagLayout, TagsConfig } from 'src/app/interfaces';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() private inputTags: any[];
  @Input() public config: TagsConfig;
  public tags: any[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.tags);
    if (!this.config.populated) {
      this.populateTags();
    } else {
      this.inputTags.map((tag) => {
        this.tags.push({
          populated: true,
          tagId: tag._id
        });
      });
    }
  }

  populateTags() {

  }

  addTag(tagId) {
    this.tags.push({
      populated: false,
      tagId
    });
  }

}
