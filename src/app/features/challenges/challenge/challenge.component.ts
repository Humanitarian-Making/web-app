import { AssetService } from './../../../core/services/asset.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { ChallengeService } from './../challenge.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenge } from 'src/app/interfaces';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  challengeSlug: string;
  challenge: Challenge;
  constructor(
    private route: ActivatedRoute,
    public challengeService: ChallengeService,
    private router: Router,
    public lang: LanguageService,
    public asset: AssetService
  ) { }

  ngOnInit(): void {
    this.challengeSlug = this.route.snapshot.paramMap.get('challengeSlug');
    this.challenge = this.challengeService.getChallenge(this.challengeSlug);
  }

  goToChallenges() {
      this.router.navigateByUrl('challenges');
  }

}
