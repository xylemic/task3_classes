const Library = require('../Library');
const Book = require('../Book');

describe('Library CommonJs Tests', () => {
  let lib;
  beforeEach(() => {
    lib = new Library();
  });

  test('should add a book successfully', () => {
    const book = new Book('To Kill a Mockingbird', 'Harper Lee', '9780141951755', false);
    expect(lib.addBook(book)).toBe('book added successfully!');

    expect(lib.books).toHaveLength(1);
  });

  test('should find a book by title', ()=> {
    const book = new Book('1984', 'George Orwell', '9780415249353', true);
    expect(lib.addBook(book));

    expect(lib.findBookByTitle('1984')).toBe(book);
  });

  test('should return "book not found" if the title does not exist', ()=> {
    expect(lib.findBookByTitle('nonexistent book')).toBe('book not found');
  });

  test('should remove a book by ISBN', ()=> {
    const book = new Book('To Kill a Mockingbird', 'Harper Lee', '9780141951755', false);
    lib.addBook(book);

    expect(lib.removeBook('9780141951755')).toBe('book removed successfully!');

    expect(lib.books).toHaveLength(0);
  });
})
