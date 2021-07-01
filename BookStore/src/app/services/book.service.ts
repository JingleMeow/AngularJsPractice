import { Book } from './../model/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAllBooks(): Book[] {
    return books;
  }
}

const books = [
  new Book('Pride and Prejudice', 'Jane Austin'),
  new Book('The Great Gatsby', 'F. Scott Fitzgerald')
];
