import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ChallengesPageComponent } from './challenges-page/challenges-page.component';

const routes: Routes = [
    {
        path: 'challenges',
        component: ChallengesPageComponent
    },
    {
        path: 'challenge',
        children: [
            // {
            //     path: 'conference',
            //     component:  ConferenceComponent
            // }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChallengesRoutingModule {

}
