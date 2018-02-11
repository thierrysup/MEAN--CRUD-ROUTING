import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import {Article} from '../../../models/article';
import {Client} from '../../../models/client';
import {ArticleService, ClientService} from '../../../services/providers';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleEditComponent implements OnInit {

  article: Article = new Article();
  // client_id: any;
  clients: Client[];
  client: Client = new Client;

  // tslint:disable-next-line:max-line-length
  constructor(private articleService: ArticleService, private clientService: ClientService, private router: Router, private route: ActivatedRoute) {
    this.getClients();
  }

  ngOnInit() {
    this.getArticle(this.route.snapshot.params['id']);
    this.client = this.article.client;
  }

  getArticle(id) {
    this.articleService.getArticle(id).subscribe(article => this.article = article);
  }

  getClients() {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }

  updateArticle(article) {
      article.client = this.client;
      this.articleService.updateArticle(article).subscribe(() => this.router.navigate(['/article-details', article.id]));
  }

}


