import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.scss']
})
export class ChallengesPageComponent implements OnInit {
  challenges = [
    {
      name: 'Soap Challenge',
      desc: ``,
      url: ''
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToUrl(url) {
    this.router.navigateByUrl(`challenge/${url}`);
  }
}
