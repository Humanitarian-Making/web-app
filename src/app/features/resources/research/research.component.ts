import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from '../resource.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { AssetService } from 'src/app/core/services/asset.service';
import { AssetType, MimeType } from 'src/app/interfaces';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})

export class ResearchComponent implements OnInit {
  public resource;
  constructor(
    private route: ActivatedRoute, 
    private resourceService: ResourceService,
    public lang: LanguageService,
    public asset: AssetService,
    private router: Router) { }

  ngOnInit(): void {
    this.resource = {
      slug: 'research',
      image: {
        type: AssetType.image,
        name: '',
        mime: MimeType.png
      },
      resources: [
        {
          name: [this.lang.createOption('Interview Question')],
          desc: [this.lang.createOption('')],
          asset: {
            type: AssetType.resources,
            name: `Interview questions Humanitarian Making Ecosystem Study`,
            mime: MimeType.pdf
          }
        }
      ]
    }
  }

  goToResources() {
    this.router.navigateByUrl('resources');
  }

}
