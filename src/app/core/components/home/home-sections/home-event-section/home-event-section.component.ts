import { EventService } from './../../../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-event-section',
  templateUrl: './home-event-section.component.html',
  styleUrls: ['./../../home.component.scss']
})
export class HomeEventSectionComponent implements OnInit {
  public events: any [];
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.events = this.eventService.events;
  }

  goToEvents() {
    this.router.navigateByUrl('events');
  }
}
