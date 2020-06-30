import { Injectable } from '@angular/core';
import { Asset, AssetType, MimeType } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  image: Asset;
  public events = [
    {
      name: 'How to distribute fabrication of COVID-19 solutions',
      desc: `This week's debate will deepen the discussion by exploring the important subject of distributed fabrication.`,
      date: 'Thursday, June 18th',
      location: 'Online: Zoom',
      image: {
        type: AssetType.image,
        name: 'webinar',
        mime: MimeType.png
      },
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
      image: {
        type: AssetType.image,
        name: 'conference',
        mime: MimeType.png
      },
      link: {
        internal: true,
        url: 'conference'
      }
    }
  ];
  constructor() { }
}
