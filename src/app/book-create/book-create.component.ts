import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {Book} from '../book';
import {BookService} from '../book.service';

declare var $:any;

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book : Book;

  constructor(private bookService : BookService, private router: Router) {
     this.book = new Book();
   }

  ngOnInit() {
  }
  saveBook() {
       this.bookService.addBook(this.book).subscribe(book => {
            this.router.navigate(['/books']);
          }
      ); 
    }
  
   /*  showNotification(from, align){
      var type = ['','info','success','warning','danger'];

      var color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "ti-gift",
        message: "New Entry had been create..."
      },{
          type: type[1],
          timer: 2000,
          placement: {
              from: from,
              align: align
          }
      });
  } */
}
