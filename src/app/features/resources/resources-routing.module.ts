import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { ReadinessLevelsComponent } from './readiness-levels/readiness-levels.component';
import { EthicsPageComponent } from './ethics-page/ethics-page.component';
import { TrainingPageComponent } from './training-page/training-page.component';
import { GRNPageComponent } from './grn-page/grn-page.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { ResearchComponent } from './research/research.component';

const routes: Routes = [
    {
        path: 'resources',
        component:  ResourcesPageComponent
    },
    {
        path: 'resource',
        children: [
            {
                path: 'readiness-levels',
                component:  ReadinessLevelsComponent
            },
            {
                path: 'research',
                component:  ResearchComponent
            },
            {
                path: 'code-of-practice',
                component: EthicsPageComponent
            },
            {
                path: 'training-materials',
                component: TrainingPageComponent
            },
            {
                path: 'grn',
                component: GRNPageComponent
            },
            {
                path: ':resourceSlug',
                component: ResourcePageComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResourcesRoutingModule {
}
