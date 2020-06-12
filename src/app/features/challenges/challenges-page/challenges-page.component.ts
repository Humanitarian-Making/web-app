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
      desc: `Lorem fasfasdfasdfasdfasdfasdfasdfasdfasdf  fasdfasdf asdfa sdfasd fasdf asdf asdfas`,
    },
    {
      name: 'Test Challenge',
      desc: `Lorem fasfasdfasdfasdfasdfasdfasdfasdfasdf  
      fasdfasdf asdfa sdfasd fasdf asdf asdfas 
      Lorem fasfasdfasdfasdfasdfasdfasdfasdfasdf  
      fasdfasdf asdfa sdfasd fasdf asdf asdfas`,
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToUrl(url) {
    this.router.navigateByUrl(`challenge/${url}`);
  }
}
