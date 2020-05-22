import { TagsRes } from './../../../../functions/src/interfaces';
import { CreateTagComponent } from './../create-tag/create-tag.component';
import { TagService } from './../../services/tag.service';
import { LanguageService } from '../../services/language.service';
import { TagGroup } from '../../interfaces/tag-group';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DocumentChangeType } from '@google-cloud/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-groups-page',
  templateUrl: './root-tags-page.component.html',
  styleUrls: ['./root-tags-page.component.scss']
})
export class RootTagsPageComponent implements OnInit {
  tags;

  constructor(
    public langService: LanguageService,
    public tagService: TagService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tagService.getRootTags().subscribe((res: TagsRes) => {
      if (res.success) {
        this.tags = res.tags;
      }
    });
  }

  onClickCreate() {
    this.dialog.open(CreateTagComponent, {
      width: '250px',
      data: { parent: null }
    });
  }

  goToTag(id) {
    this.router.navigate(['tag/' + id]);
  }

}
