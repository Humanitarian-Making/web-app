import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-title-section',
  templateUrl: './home-title-section.component.html',
  styleUrls: ['./../../home.component.scss']
})
export class HomeTitleSectionComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProjects() {
    this.router.navigateByUrl('projects');
  }

}
