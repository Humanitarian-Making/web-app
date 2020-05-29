import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  events = [
    {
      name: 'Event Name',
      desc: 'Description of Event',
      date: moment().format('MMMM Do YYYY @ h:mm a'),
      location: 'Location'
    },
    {
      name: 'Event Name 2',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui commodi officiis impedit expedita quis',
      date: moment().format('MMMM Do YYYY @ h:mm a'),
      location: 'London'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
