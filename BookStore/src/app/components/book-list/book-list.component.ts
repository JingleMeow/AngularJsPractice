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
  displayedColumns: string[] = ['No.', 'title', 'author', 'actions'];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookList = this.bookService.getAllBooks();
  }

  onDelete(index: number) {
    this.bookService.deleteBook(index);
    this.bookList = this.bookService.getAllBooks();
  }
}
