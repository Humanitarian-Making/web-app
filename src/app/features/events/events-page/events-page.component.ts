import { EventService } from './../../../core/services/event.service';
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
  public events: any[];
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.events = this.eventService.events;
  }

}
