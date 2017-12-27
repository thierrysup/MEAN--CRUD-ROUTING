import { Routes } from '@angular/router';

import { BookComponent }   from './book/book.component';
import { BookCreateComponent }   from './book-create/book-create.component';
import { BookDetailComponent }   from './book-detail/book-detail.component';
import { BookEditComponent }   from './book-edit/book-edit.component';
import { MessagesComponent } from './messages/messages.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full',
    },
    {
        path: 'books',
        component: BookComponent,
        data: { title: 'Book List' }
    },
    {
        path: 'logs',
        component: MessagesComponent,
        data: { title: 'logs List' }
      },
      {
        path: 'book-details/:id',
        component: BookDetailComponent,
        data: { title: 'Book Details' }
      },
      {
        path: 'book-create',
        component: BookCreateComponent,
        data: { title: 'Create Book' }
      },
      {
        path: 'book-edit/:id',
        component: BookEditComponent,
        data: { title: 'Edit Book' }
      }
]
