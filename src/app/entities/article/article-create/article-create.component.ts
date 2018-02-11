import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {Article} from '../../../models/article';
import { Client } from '../../../models/client';
import { ArticleService, ClientService } from '../../../services/providers';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleCreateComponent implements OnInit {

  article: Article = new Article();
  clients: Client[];

  constructor(private articleService: ArticleService, private clientService: ClientService, private router: Router) {
   }

  ngOnInit() {
    this.getClients();
  }
  saveArticle() {
       this.articleService.addArticle(this.article).subscribe(article => {
            this.router.navigate(['/articles']);
          }
      );
  }

  getClients() {
    this.clientService.getClients().subscribe( clients => this.clients = clients);
  }
}


