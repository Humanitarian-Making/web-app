import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'challenges-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  events = [
    {
      name: 'How to distribute fabrication of COVID-19 solutions',
      desc: `This week's debate will deepen the discussion by exploring the important subject of distributed fabrication.`,
      date: 'Thursday, June 18th',
      location: 'Online: Zoom',
      link: {
        internal: false,
        url: 'https://viralresponse.io/+viralresponse/stories/live-event-how-to-distribute-fabrication-of-covid-19-solutions'
      }
    },
    {
      name: 'Humanitarian Making Conference',
      desc: `We are gathering together, for the first time,
      aid agencies that are developing projects and programmes
      that use local manufacturing, digital fabrication,
      FabLabs and Makerspaces.`,
      date: 'TBC',
      location: 'Toulouse, France',
      link: {
        internal: true,
        url: 'conference'
      }
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(link) {
    if (link.internal) {
      this.router.navigateByUrl(`event/${link.url}`);
    } else {
      window.location.href = link.url;
    }
  }
}
