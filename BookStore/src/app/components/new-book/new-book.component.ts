import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  title: string;
  author: string;

  constructor(private router: Router, private bookService: BookService) {
    this.title = '';
    this.author = '';
  }

  ngOnInit(): void {
  }

  onSaveButtonClick() {
    this.bookService.addBook(this.title, this.author);
    this.router.navigate(['../booklist']);
  }
}
