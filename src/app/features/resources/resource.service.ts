import { Injectable } from '@angular/core';
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
      },
      {
        slug: 'makerspace-covid-19-safety-protocols',
        name: [lang.createOption('Makerspace Covid-19 Safety Protocols')],
        desc: [lang.createOption(`Covid-19 requires new safety protocols for everyday life. Here are safety protocols for Makerspaces in English, Kurdish, Portugese and Arabic. `)],
        image: {
          type: AssetType.image,
          name: 'covid-2',
          mime: MimeType.png
        },
        resources: [
          {
            name: [lang.createOption('English Version')],
            desc: [lang.createOption('')],
            asset: {
              type: AssetType.resources,
              name: `MAKERSPACE SAFETY PROTOCOLS TO COVID-19 (A4) (English)`,
              mime: MimeType.pdf
            }
          },
          {
            name: [lang.createOption('Kurdish Version')],
            desc: [lang.createOption('')],
            asset: {
              type: AssetType.resources,
              name: `MAKERSPACE SAFETY PROTOCOLS TO COVID-19 (A4) (Kurdish)`,
              mime: MimeType.pdf
            }
          },
          {
            name: [lang.createOption('Portugese Version')],
            desc: [lang.createOption('')],
            asset: {
              type: AssetType.resources,
              name: `MAKERSPACE SAFETY PROTOCOLS TO COVID-19 (A4) (Portugese)`,
              mime: MimeType.pdf
            }
          },
          {
            name: [lang.createOption('Arabic Version')],
            desc: [lang.createOption('')],
            asset: {
              type: AssetType.resources,
              name: `MAKERSPACE SAFETY PROTOCOLS TO COVID-19 (Arabic)`,
              mime: MimeType.pdf
            }
          }
        ]
      },
      {
        slug: 'research',
        name: [lang.createOption('Humanitarian Making Ecosystem Study')],
        desc: [lang.createOption(`A research project to understand the current state of the
        ‘Humanitarian Making’ ecosystem, and to map how it has developed over the past ten years. `)],
        image: {
          type: AssetType.image,
          name: '',
          mime: MimeType.png
        }
      },
      {
        slug: 'training-materials',
        name: [lang.createOption('Shortcutting Supply Chains for Humanitarian Relief: A How-To Guide')],
        desc: [lang.createOption(`Access Field Ready's high quality training on how we operate and manufacture at the cutting edge in the field. `)],
        image: {
          type: AssetType.image,
          name: '',
          mime: MimeType.png
        }
      },
      {
        slug: 'grn',
        name: [lang.createOption('Goods Received Notes')],
        desc: [lang.createOption(`Access Field Ready's high quality training on how we operate and manufacture at the cutting edge in the field. `)],
        image: {
          type: AssetType.image,
          name: '',
          mime: MimeType.png
        }
      }
    ];

  }

  getResource(slug) {
    const index = this.resources.findIndex((resource) => resource.slug === slug);
    if (index !== -1) {
      return this.resources[index];
    } else {
      return null;
    }
  }
}
