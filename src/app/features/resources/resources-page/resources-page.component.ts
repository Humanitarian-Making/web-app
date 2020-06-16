import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetService } from 'src/app/core/services/asset.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.scss']
})
export class ResourcesPageComponent implements OnInit {
  public resources: any[];
  constructor(
    private router: Router,
    private resourceService: ResourceService,
    public asset: AssetService,
    public lang: LanguageService
  ) { }

  ngOnInit(): void {
    this.resources = this.resourceService.resources;
  }

  goToUrl(slug) {
    this.router.navigateByUrl(`resource/${slug}`);
  }


}
