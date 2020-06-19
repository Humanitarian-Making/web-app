import { LanguageService } from 'src/app/core/services/language.service';
import { AssetService } from './../../../core/services/asset.service';
import { ChallengeService } from './../challenge.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/interfaces';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.scss']
})
export class ChallengesPageComponent implements OnInit {
  public challenges: Challenge[];
  constructor(
    private router: Router,
    private challengeService: ChallengeService,
    public asset: AssetService,
    public lang: LanguageService
  ) { }

  ngOnInit(): void {
    this.challenges = this.challengeService.challenges;
  }

  goToUrl(slug) {
    this.router.navigateByUrl(`challenge/${slug}`);
  }
}
