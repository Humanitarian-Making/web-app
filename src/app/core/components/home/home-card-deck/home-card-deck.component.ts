import { AssetService } from './../../../services/asset.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LanguageOption } from 'src/app/interfaces';

interface HomePageCard {
  name: LanguageOption[];
  desc: LanguageOption[];
  image?: {
    url: string;
    desc: string;
  };
  link: {
    internal: boolean;
    url: string;
  };
}

@Component({
  selector: 'app-home-card-deck',
  templateUrl: './home-card-deck.component.html',
  styleUrls: ['./home-card-deck.component.scss']
})
export class HomeCardDeckComponent implements OnInit {
  public cards: HomePageCard[] = [
    {
      name: [
        {text: 'Projects', language: 'english'}
      ],
      desc: [
        {text: 'View Projects created by various humanitarian aid agency', language: 'english'}
      ],
      image: {
        url: 'Shelter',
        desc: 'Project logos',
      },
      link: {
        url: 'projects',
        internal: true
      }
    },
    {
      name: [
        {text: 'Map', language: 'english'}
      ],
      desc: [
        {text: 'Map of manufacturing locations and FabLabs', language: 'english'}
      ],
      image: {
        url: 'Map',
        desc: 'Map Logo',
      },
      link: {
        url: 'map',
        internal: true
      }
    },
    {
      name: [
        {text: 'Events', language: 'english'}
      ],
      desc: [
        {text: 'Education, information and conference', language: 'english'}
      ],
      image: {
        url: 'Calendar',
        desc: 'Project logos',
      },
      link: {
        url: 'events',
        internal: true
      }
    },
    {
      name: [
        {text: 'Code of Practice', language: 'english'}
      ],
      desc: [
        {text: 'Humanitarian Making Code of Practice is rules contributes will work with', language: 'english'}
      ],
      image: {
        url: 'User',
        desc: 'Project logos',
      },
      link: {
        url: 'resource/code-of-practice',
        internal: true
      }
    },
    {
      name: [
        {text: 'Design Challenges', language: 'english'}
      ],
      desc: [
        {text: 'Design Challenges are created to inspire innovation where there is a needed.', language: 'english'}
      ],
      image: {
        url: 'Innovation',
        desc: 'Project logos',
      },
      link: {
        url: 'challenges',
        internal: true
      }
    },
    {
      name: [
        {text: 'Readiness Levels', language: 'english'}
      ],
      desc: [
        {text: `Each Project has a readiness level. How is 'readiness' measured?`, language: 'english'}
      ],
      image: {
        url: 'Preparedness',
        desc: 'Project logos',
      },
      link: {
        url: 'resource/readiness-levels',
        internal: true
      }
    },
    {
      name: [
        {text: 'Resources', language: 'english'}
      ],
      desc: [
        {text: 'View resources', language: 'english'}
      ],
      image: {
        url: 'Services-and-tools',
        desc: 'Project logos',
      },
      link: {
        url: 'resources',
        internal: true
      }
    },
  ];

  constructor(private router: Router, public lang: LanguageService, public asset: AssetService) { }

  ngOnInit(): void {
  }

  getLogoUrl(name) {
    return `assets/logos/${name}`;
  }

  goToUrl(url) {
    this.router.navigateByUrl(url);
  }
}
