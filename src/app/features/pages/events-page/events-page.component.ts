import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  events = [
    {
      name: 'Humanitarian Making Conference',
      desc: 'We are gathering together, for the first time, aid agencies that are developing projects and programmes that use local manufacturing, digital fabrication, FabLabs and Makerspaces.',
      date: 'TBC',
      location: 'Toulouse, France',
      url: 'conference'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToUrl(url) {
    this.router.navigateByUrl(`events/${url}`)
  }
}
