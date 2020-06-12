import { LanguageService } from 'src/app/core/services/language.service';
import { AuthService } from '../../../core/services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../core/services/project.service';
import { tap, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddTagComponent } from 'src/app/features/tag/add-tag/add-tag.component';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projectId: string;
  project;
  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    public authService: AuthService,
    public langService: LanguageService,
    public addTagDialog: MatDialog
  ) { }

  editProject() {
    this.router.navigateByUrl('project/' + this.projectId + '/edit');
  }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('projectId');
    this.projectService.getProject(this.projectId)
    .pipe(
      map((res: any) => {
        if (res.success && res.project) {
          const newTags = res.project.tags.filter((tag) => {
            if (Object.keys(tag).length !== 0) {
              return tag;
            }
          });
          console.log('res: ', res);
          res.project.tags = newTags;
          return res;
        }
      })
    )
    .subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.project = res.project;
      }
    });
  }

  addTag() {
    {
      const addTagDiologRef = this.addTagDialog.open(AddTagComponent, {
        width: '250px',
        data: { source: 'project' }
      });

      addTagDiologRef.afterClosed().subscribe(tagRef => {
        console.log('Tag to Add: ', tagRef);
        this.projectService.addTagToProject(this.projectId, tagRef);
      });
    }
  }

  goToTag(id) {
    this.router.navigateByUrl('tag/' + id);
  }

  goToProject(url) {
    console.log('goToProject: ', url);
    window.open(url, '_blank');
  }

  goToProjects() {
    this.router.navigateByUrl('projects');
  }

}
