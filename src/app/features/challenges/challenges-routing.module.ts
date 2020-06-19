import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { ChallengeComponent } from './challenge/challenge.component';

const routes: Routes = [
    {
        path: 'challenges',
        component: ChallengesPageComponent
    },
    {
        path: 'challenge/:challengeSlug',
        component: ChallengeComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChallengesRoutingModule {

}
