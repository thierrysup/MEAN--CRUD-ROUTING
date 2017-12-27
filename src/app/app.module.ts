import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import {SideBarModule} from './side-bar/side-bar.module';
import {NavBarModule} from './nav-bar/nav-bar.module';
import {FooterModule} from './footer/footer.module';

import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { MessagesComponent } from './messages/messages.component';
import {BookService} from './book.service';
import {MessageService} from './message.service';

/* const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
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
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
]; */
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SideBarModule,
    NavBarModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [BookService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
