import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EventsPageComponent } from './events-page/events-page.component';
import { ConferenceComponent } from './conference/conference.component';


const routes: Routes = [
    {
        path: 'events',
        component: EventsPageComponent
    },
    {
        path: 'event',
        children: [
            {
                path: 'conference',
                component:  ConferenceComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule {

}
