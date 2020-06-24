import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-featured-projects',
  templateUrl: './home-featured-projects.component.html',
  styleUrls: ['./../../home.component.scss']
})
export class HomeFeaturedProjectsComponent implements OnInit {
  public loading: boolean;
  public projects: any[];
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loading = true;
    this.projectService.getFeatured(3).subscribe((res: any) => {
      if (res.success) {
        this.loading = false;
        this.projects = res.projects;
      }
    });
  }

}
