import { TagService } from '../../../core/services/tag.service';
import { LanguageService } from '../../../core/services/language.service';
import { TagSnippet, TagRes } from '../../../interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit {
  tagId: string;
  tag;
  tagSnippet: TagSnippet;
  user;
  tags$;
  imageURL;
  public projects;


  constructor(
    private projectService: ProjectService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public langService: LanguageService,
    private tagService: TagService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tagId = this.route.snapshot.paramMap.get('tagId');
    this.tagService.getTag(this.tagId).subscribe((res: TagRes) => {
      if (res.success) {
        this.tag = res.tag;
      }
    });
    this.projectService.filterByProjectTags([this.tagId]).subscribe((res: any) => {
      if (res.success) {
        this.projects = res.projects;
      }
    });
  }

  goToTag(id) {
    this.router.navigateByUrl('tag/' + id)
    .then(() => {
      this.router.navigate(['tag/' + id]);
      this.ngOnInit();
    });
  }

  goToEditPage() {
    this.router.navigateByUrl(`tag/${this.tagId}/edit`);
  }

  goToRootTags() {
    this.router.navigateByUrl('tags');
  }

  goToUserGroup(id) {
    this.router.navigateByUrl(`user-group/${id}`);
  }

  clickEditUserGroup() {
    console.log('clickEditUserGroup: ');
  }

}
