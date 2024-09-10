const DigitalLibrary = require('../DigitalLibrary');
const Book = require('../Book');

describe('DigitalLibrary Class', () => {
  let digitalLibrary;
  let book1, book2;

  beforeEach(() => {
    digitalLibrary = new DigitalLibrary();
    book1 = new Book('1984', 'George Orwell', '1234567890123');
    book2 = new Book('Eloquent JavaScript', 'Marijn Haverbeke', '9781593279509');
    digitalLibrary.addBook(book1);
    digitalLibrary.addBook(book2);
  });

  test('should download book if available', () => {
    const result = digitalLibrary.downloadBook('1234567890123');
    expect(result).toBe('book has been successfully downloaded');
  });

  test('should not download book if not available', () => {
    book1.borrowBook();  // Borrow the book to make it unavailable
    const result = digitalLibrary.downloadBook('1234567890123');
    expect(result).toBe('book is not available');
  });

  test('should return "book not found" if book does not exist', () => {
    const result = digitalLibrary.downloadBook('0000000000000');
    expect(result).toBe('book not found');
  });
});