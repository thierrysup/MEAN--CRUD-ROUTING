import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {Book} from '../book';
import {BookService} from '../book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book :Book = new Book();

  constructor(private router: Router, private route: ActivatedRoute,
    private location: Location, private bookService: BookService) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  deleteBook(id) {
    this.bookService.deleteBook(id).subscribe(()=>this.goBack());
  }

}
