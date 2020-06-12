import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReadinessLevelsComponent } from './readiness-levels/readiness-levels.component';
import { EthicsPageComponent } from './ethics-page/ethics-page.component';

const routes: Routes = [
    {
        path: 'pages',
        children: [
            {
                path: 'readiness-levels',
                component:  ReadinessLevelsComponent
            },
            {
                path: 'code-of-practice',
                component: EthicsPageComponent
            },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {

}
