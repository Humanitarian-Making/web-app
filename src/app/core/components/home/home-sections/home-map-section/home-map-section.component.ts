import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-map-section',
  templateUrl: './home-map-section.component.html',
  styleUrls: ['./../../home.component.scss']
})
export class HomeMapSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMap() {
    this.router.navigateByUrl('map');
  }
}
