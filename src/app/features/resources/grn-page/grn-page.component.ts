import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from '../resource.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { AssetService } from 'src/app/core/services/asset.service';
import { AssetType, MimeType } from 'src/app/interfaces';

@Component({
  selector: 'app-grn',
  templateUrl: './grn-page.component.html',
  styleUrls: ['./grn-page.component.scss']
})

export class GRNPageComponent implements OnInit {
  public resource;
  constructor(
    private route: ActivatedRoute, 
    private resourceService: ResourceService,
    public lang: LanguageService,
    public asset: AssetService,
    private router: Router) { }

  ngOnInit(): void {
    this.resource = {
      slug: 'grn',
      image: {
        type: AssetType.image,
        name: '',
        mime: MimeType.png
      },
      resources: [
        {
          name: [this.lang.createOption('Goods Received Note')],
          desc: [this.lang.createOption('')],
          asset: {
            type: AssetType.resources,
            name: `grn`,
            mime: MimeType.xlsx
          }
        }
      ]
    }
  }

  goToResources() {
    this.router.navigateByUrl('resources');
  }

  getImage(ref) {
    const refString = 'assets/images/' + ref + '.png';
    return refString;
  }

}
