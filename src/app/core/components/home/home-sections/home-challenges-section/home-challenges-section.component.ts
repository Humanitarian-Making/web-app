import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-challenges-section',
  templateUrl: './home-challenges-section.component.html',
  styleUrls: ['./../../home.component.scss']
})
export class HomeChallengesSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToChallenges() {
    this.router.navigateByUrl('challenges');
  }
}
