import { LanguageService } from 'src/app/core/services/language.service';
import { Injectable } from '@angular/core';
import { Challenge, AssetType, MimeType } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  public challenges: Challenge[];
  constructor(public lang: LanguageService) {
    this.challenges = [
      {
        slug: 'soap',
        name: [lang.createOption('Soap')],
        desc: [lang.createOption('Creation of Soap')],
        resources: [
          {
            name: [lang.createOption('Design Spec')],
            desc: [lang.createOption('Design Specification')],
            asset: {
              type: AssetType.challenge,
              name: 'test',
              mime: MimeType.pdf
            }
          }
        ]
      }
    ];
  }

  getChallenge(slug): Challenge {
    const index = this.challenges.findIndex((challenge) => challenge.slug === slug);
    if (index !== -1) {
      return this.challenges[index];
    } else {
      return null;
    }
  }
}
