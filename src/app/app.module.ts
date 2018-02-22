import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routing';
import {SideBarModule} from './side-bar/side-bar.module';
import {NavBarModule} from './nav-bar/nav-bar.module';
import {FooterModule} from './footer/footer.module';
import {HomeModule} from './home/home.module';

import {MessageService} from './services/message/message.service';
import {ArticleService} from './services/providers';
import {ClientService} from './services/providers';
import {AppComponent} from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ClientListComponent } from './entities/client/client-list/client-list.component';
import { ClientCreateComponent } from './entities/client/client-create/client-create.component';
import { ClientDetailComponent } from './entities/client/client-detail/client-detail.component';
import { ClientEditComponent } from './entities/client/client-edit/client-edit.component';

import { ArticleListComponent } from './entities/article/article-list/article-list.component';
import { ArticleDetailComponent } from './entities/article/article-detail/article-detail.component';
import { ArticleEditComponent } from './entities/article/article-edit/article-edit.component';
import { ArticleCreateComponent } from './entities/article/article-create/article-create.component';
// import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ClientListComponent,
    ClientCreateComponent,
    ClientDetailComponent,
    ClientEditComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
  //  HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SideBarModule,
    NavBarModule,
    HomeModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [ClientService, ArticleService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
