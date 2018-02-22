


import { Routes, ChildrenOutletContexts } from '@angular/router';

import { ArticleListComponent } from './entities/article/article-list/article-list.component';
import { ArticleCreateComponent } from './entities/article/article-create/article-create.component';
import { ArticleEditComponent } from './entities/article/article-edit/article-edit.component';
import { ArticleDetailComponent } from './entities/article/article-detail/article-detail.component';

import { ClientListComponent } from './entities/client/client-list/client-list.component';
import { ClientCreateComponent } from './entities/client/client-create/client-create.component';
import { ClientEditComponent } from './entities/client/client-edit/client-edit.component';
import { ClientDetailComponent } from './entities/client/client-detail/client-detail.component';

import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }
    ,  {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home App' },
        children: [
          {path: 'clients', component: ClientListComponent, data: { title: 'Client List'}},
          {path: 'articles', component: ArticleListComponent, data: { title: 'Article List'}},
          {path: '', redirectTo: '/home/clients', pathMatch: 'full' }
        ]
    }/* ,
    {
        path: 'clients',
        component: ClientListComponent,
        data: { title: 'Client List' }
    } */,
    {
        path: 'logs',
        component: MessagesComponent,
        data: { title: 'logs List' }
      },
      {
        path: 'client-details/:id',
        component: ClientDetailComponent,
        data: { title: ' Client Details' }
      },
      {
        path: 'client-create',
        component: ClientCreateComponent,
        data: { title: 'Create Client' }
      },
      {
        path: 'client-edit/:id',
        component: ClientEditComponent,
        data: { title: 'Edit Client' }
      }/* ,
      {
        path: 'articles',
        component: ArticleListComponent,
        data: { title: 'Article List' }
      } */,
      {
        path: 'article-details/:id',
        component: ArticleDetailComponent,
        data: { title: ' Article Details' }
      },
      {
        path: 'article-create',
        component: ArticleCreateComponent,
        data: { title: 'Create Article' }
      },
      {
        path: 'article-edit/:id',
        component: ArticleEditComponent,
        data: { title: 'Edit Article' }
      },
      { path: '**', redirectTo: '/home' }
];
