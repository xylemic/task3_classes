const Book = require('./Book');

class Library {
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
   const book = this.books.find(book => book.title === title);
   if (book) {
    return book;
   } else {
    return 'book not found';
   }
  }
}

module.exports = Library;
