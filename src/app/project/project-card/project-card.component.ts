import { LanguageService } from 'src/app/services/language.service';
import { Component, OnInit, AfterViewInit,  Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    public langService: LanguageService
  ) { }

  goToProject() {
    this.router.navigateByUrl('project/' + this.project._id);
  }

  ngOnInit() {
    if (this.project.imageUrl === null) {
      this.project.imageUrl = './../assets/hm-logo.png';
    }
  }


}


