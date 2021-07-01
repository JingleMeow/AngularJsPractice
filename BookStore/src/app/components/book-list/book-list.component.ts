import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  bookService: BookService;
  displayedColumns: string[] = ['title', 'author'];

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit() {
    this.bookList = this.bookService.getAllBooks();
  }
}
