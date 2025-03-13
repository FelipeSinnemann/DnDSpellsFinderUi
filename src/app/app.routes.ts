import { Routes } from '@angular/router';
import { SpellsComponent } from './pages/spells/spells.component';
import { AboutComponent } from './pages/about/about.component';

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
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: '/spells'
    },
];
