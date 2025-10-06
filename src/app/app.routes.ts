import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticlesComponent } from './articles/articles.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'articles',
        component: ArticlesComponent,
    },
    {
        path: 'admin',
        component: AdminComponent,
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
