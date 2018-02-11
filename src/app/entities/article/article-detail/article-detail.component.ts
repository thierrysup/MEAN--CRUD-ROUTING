import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {Article} from '../../../models/article';
import {ArticleService} from '../../../services/providers';



@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailComponent implements OnInit {

  article: Article = new Article();

  constructor(private router: Router, private route: ActivatedRoute,
    private location: Location, private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticleDetail(this.route.snapshot.params['id']);
  }

  getArticleDetail(id) {
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }

  deleteArticle(id) {
    this.articleService.deleteArticle(id).subscribe(() => this.goBack());
  }

}


