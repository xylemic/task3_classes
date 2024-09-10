const Book = require('../Book');

describe('Book Class', () => {
  let book;
  
  beforeEach(() => {
    book = new Book('1984', 'George Orwell', '1234567890123');
  });

  test('should create a book with title, author, isbn, and available status', () => {
    expect(book.title).toBe('1984');
    expect(book.author).toBe('George Orwell');
    expect(book.getisbn()).toBe('1234567890123');
    expect(book.available).toBe(true);
  });

  test('should update ISBN with a valid 13-digit number', () => {
    const result = book.setisbn('9781593279509');
    expect(result).toBe('ISBN updated successfully!');
    expect(book.getisbn()).toBe('9781593279509');
  });

  test('should not update ISBN with an invalid format', () => {
    const result = book.setisbn('123456');
    expect(result).toBe('invalid ISBN format. please enter a 13-digit number.');
  });

  test('should borrow a book if available', () => {
    const result = book.borrowBook();
    expect(result).toBe('1984 has been borrowed by George Orwell');
    expect(book.available).toBe(false);
  });

  test('should return a book if it was borrowed', () => {
    book.borrowBook();  // first, borrow the book
    const result = book.returnBook();
    expect(result).toBe('1984 has been returned by George Orwell');
    expect(book.available).toBe(true);
  });
});