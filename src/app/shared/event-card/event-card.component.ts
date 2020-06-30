import { AssetService } from 'src/app/core/services/asset.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { Component, OnInit, AfterViewInit,  Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event;

  constructor(
    private router: Router,
    public asset: AssetService,
    public langService: LanguageService
  ) { }

  goTo(link) {
    if (link.internal) {
      this.router.navigateByUrl(`event/${link.url}`);
    } else {
      window.location.href = link.url;
    }
  }

  ngOnInit() {
  }
}


