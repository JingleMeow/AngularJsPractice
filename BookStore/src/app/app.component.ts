import { Book } from './model/book';
import { Component } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStore';
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
