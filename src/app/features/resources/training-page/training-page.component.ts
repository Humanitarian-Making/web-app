import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from '../resource.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { AssetService } from 'src/app/core/services/asset.service';
import { AssetType, MimeType } from 'src/app/interfaces';

@Component({
  selector: 'app-training',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.scss']
})

export class TrainingPageComponent implements OnInit {
  public resource;
  constructor(
    private route: ActivatedRoute, 
    private resourceService: ResourceService,
    public lang: LanguageService,
    public asset: AssetService,
    private router: Router) { }

  ngOnInit(): void {
    this.resource = {
      slug: 'training-materials',
      image: {
        type: AssetType.image,
        name: '',
        mime: MimeType.png
      },
      resources: [
        {
          name: [this.lang.createOption('Training Guide')],
          desc: [this.lang.createOption('')],
          asset: {
            type: AssetType.resources,
            name: `Field Ready Training Package Levels 1 and 2 Final_31OCT2017_Print`,
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
