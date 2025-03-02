import { Routes } from '@angular/router';
import { SpellsComponent } from './pages/spells/spells.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'spells',
        component: SpellsComponent
    },
    {
        path: '',
        redirectTo: '/spells',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: '/spells'
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    },
];
