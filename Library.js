import { Book } from './Book.js';

export class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    const existingBook = this.books.find(b => b.title === book.title);
    if (existingBook) {
      return 'book already exists';
    }
    this.books.push(book);
    return 'book added successfully!';
  }

  removeBook(isbn) {
    const index = this.books.findIndex(book => book.getisbn !== isbn);
    if (index === -1) {
      return 'book not found';
    } else {
      this.books.splice(index, 1);
      return 'book removed successfully!';
    }
  }

  findBookByTitle(title) {
    if (this.books.title !== title) {
      return 'book not found';
    } else {
      return this.books.filter(book => book.title === title);
    }
  }
}

const myLibrary = new Library();

// const book1 = myLibrary.addBook(new Book("to kill a mockingbird", "harper lee", "9780141951755"));

// const book2 = myLibrary.addBook(new Book('eloquent javascript', 'marijn haverbeke', '9781593279509'));

// console.log(myLibrary.removeBook('9780141951755'));
// console.log(myLibrary.books);

// console.log(myLibrary.findBookByTitle('to kill a mockingbird'));
