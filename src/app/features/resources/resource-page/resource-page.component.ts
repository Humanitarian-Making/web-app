import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from '../resource.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { AssetService } from 'src/app/core/services/asset.service';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.scss']
})
export class ResourcePageComponent implements OnInit {
  public resourceSlug;
  public resource;
  constructor(
    private route: ActivatedRoute, 
    private resourceService: ResourceService,
    public lang: LanguageService,
    public asset: AssetService,
    private router: Router) { }

  ngOnInit(): void {
    this.resourceSlug = this.route.snapshot.paramMap.get('resourceSlug');
    this.resource = this.resourceService.getResource(this.resourceSlug);
  }

  goToResources() {
    this.router.navigateByUrl('resources');
}

}
