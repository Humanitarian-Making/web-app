import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesPageComponent } from './pages-page/pages-page.component';
import { ReadinessLevelsComponent } from './readiness-levels/readiness-levels.component';
import { EthicsPageComponent } from './ethics-page/ethics-page.component';

const routes: Routes = [
    {
        path: 'pages',
        component:  PagesPageComponent
    },
    {
        path: 'page',
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
