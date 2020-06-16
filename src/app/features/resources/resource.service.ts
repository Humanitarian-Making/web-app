import { Injectable } from '@angular/core';
import { ReadinessLevelsComponent } from './readiness-levels/readiness-levels.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { AssetType, MimeType } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  public resources: any[];
  constructor(public lang: LanguageService) {
    this.resources = [
      {
        slug: 'readiness-levels',
        name: [lang.createOption('Readiness Levels')],
        desc: [lang.createOption(`
          Product development encompasses a number of concerns that
          are not always easily captured in saying that something is
          “ready.” Four separate readiness scales are listed for each
          item in this catalog along with a consideration of risk.
          The five categories are explained below along with the
          readiness scales on the following provides users of this
          catalog with a clear understanding of how the system works.`)
        ],
        image: {
          type: AssetType.image,
          name: 'easy-to-use',
          mime: MimeType.png
        },
      },
      {
        slug: 'code-of-practice',
        name: [lang.createOption('Code of Practice')],
        desc: [lang.createOption(``)],
        image: {
          type: AssetType.image,
          name: 'accountable',
          mime: MimeType.png
        },
      }
    ];

  }
}
