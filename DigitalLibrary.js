const Library = require('./Library');
class DigitalLibrary extends Library {
  constructor() {
    super();
  }

  downloadBook(isbn) {
    // download book if available
    console.log('books in library:', this.books.map(book => book.getisbn()));
    
    const book = this.books.find(book => book.getisbn() === isbn);
    if (!book) {
      return 'book not found';
    }
    if (!book.available) {
      return 'book is not available';
    }
    if (book.available) {
      return 'book has been successfully downloaded';
    }
  }
}

module.exports = DigitalLibrary;
