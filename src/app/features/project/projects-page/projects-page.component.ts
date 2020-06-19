import { AddTagInput } from '../../tag/add-tag/add-tag.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { ProjectService } from '../../../core/services/project.service';
import { Observable } from 'rxjs/internal/Observable';
import { AddTagComponent } from 'src/app/features/tag/add-tag/add-tag.component';
import { MatDialog } from '@angular/material/dialog';
import { last, tap } from 'rxjs/operators';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  public projects: any[] = [];

  constructor(
    private projectService: ProjectService,
    public addTagDialog: MatDialog,
    public langService: LanguageService
  ) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((res: any) => {
      if (res.success) {
        this.projects = res.projects;
      }
    });

    console.log(this.projects);
  }

  search(queryTagIds) {
    console.log('queryTagIds :', queryTagIds);
    if (queryTagIds.length === 0) {
      this.projectService.getProjects().subscribe((res: any) => {
        if (res.success) {
          this.projects = res.projects;
        }
      });
    } else {
      this.projectService.filterByProjectTags(queryTagIds).subscribe((res: any) => {
        if (res.success) {
          this.projects = res.projects;
        }
      });
    }
  }
}
