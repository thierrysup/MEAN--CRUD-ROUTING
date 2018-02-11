import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Article} from '../../../models/article';
import {ArticleService} from '../../../services/providers';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
    .subscribe(articles => this.articles = articles);
  }

}


