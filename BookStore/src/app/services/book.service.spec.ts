import { Book } from './../model/book';
import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;
  const testBook = "TestBook";
  const testAuthor = "TestAuthor";

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should add a book successfully', () => {
    let booksBefore = service.getAllBooks();
    service.addBook(testBook, testAuthor);
    let booksAfter = service.getAllBooks();
    expect(booksAfter.length).toEqual(booksBefore.length + 1);
    let newBook = booksAfter[booksAfter.length - 1];
    expect(newBook.title).toEqual(testBook);
    expect(newBook.author).toEqual(testAuthor);
  })
});
