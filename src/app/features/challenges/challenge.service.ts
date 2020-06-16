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
        slug: 'injection-moulding',
        name: [lang.createOption('Injection Mould for Medical Kit')],
        desc: [lang.createOption(`Instead of 3D printing, create a kit based on injection moulding.
        Specifically, small scale portable machine, with electric
        gas heated to melt the plastics, hand operated.`)],
        image: {
          type: AssetType.image,
          name: 'injection_moulding',
          mime: MimeType.png
        },
        resources: [
          {
            name: [lang.createOption('Project Brief')],
            desc: [lang.createOption('')],
            asset: {
              type: AssetType.challenge,
              name: 'medical_injection_moulding',
              mime: MimeType.pdf
            }
          }
        ]
      },
      {
        slug: 'prius-battery-reuse',
        name: [lang.createOption('Fiji Prius Battery Reuse Project')],
        desc: [lang.createOption(`
        Background: In Fiji, almost ½ of the cars are Prius. Fiji has been importing 10-year-old Toyota Prius
        cars as personal cars, taxis from Japan. Japan has a law banning the usage of any cars of more than
        ten years old, and they sell these cars in Pacific countries like Fiji.

        Prius is great. It is the first type of hybrid electric car. However, batteries won’t last for more than
        15 years. There is a massive problem with these batteries piling up in the waste field in Fiji.
        Unfortunately, there is no current sustainable exit plan for them once the batteries die. On the
        other hand, power for households is a concern, especially during a disaster.

        There is an opportunity to use these batteries, as they are still good enough for household, for
        example, it can be a backup battery for solar panel system.
        `)],
        image: {
          type: AssetType.image,
          name: 'battery',
          mime: MimeType.png
        },
        resources: [
          {
            name: [lang.createOption('Design Specification')],
            desc: [lang.createOption('')],
            asset: {
              type: AssetType.challenge,
              name: 'prius_battery_reuse',
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
