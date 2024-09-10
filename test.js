import { Book } from './Book.js';
import { DigitalLibrary } from './DigitalLibrary.js';

const digitalLibrary = new DigitalLibrary();

// adding books
digitalLibrary.addBook(new Book('To Kill a Mockingbird', 'Harper Lee', '9780141951755'));
digitalLibrary.addBook(new Book('Eloquent JavaScript', 'Marijn Haverbeke', '9781593279509', false));

// test 1: adding duplicate book
console.log(digitalLibrary.addBook(new Book('To Kill a Mockingbird', 'Harper Lee', '9780141951755')));

// Test 2: borrow and return book
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565');
digitalLibrary.addBook(book1);
console.log(book1.borrowBook());
console.log(book1.borrowBook());
console.log(book1.returnBook());
console.log(book1.returnBook());

// Test 3: remove a book
console.log(digitalLibrary.removeBook('9780743273565'));
console.log(digitalLibrary.removeBook('9780743273565'));

// Test 4: Find book by title
console.log(digitalLibrary.findBookByTitle('Eloquent JavaScript'));
console.log(digitalLibrary.findBookByTitle('Nonexistent Book'));

// Test 5: Update ISBN
const book2 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
digitalLibrary.addBook(book2);
console.log(book2.setisbn('9780596517749'));
console.log(book2.getisbn());

// Test 6: Download a book that doesn’t exist
console.log(digitalLibrary.downloadBook('1234567890123'));

// test 7: download a book that is available
const book3 = new Book('Clean Code', 'Robert C. Martin', '9780132350884');
digitalLibrary.addBook(book3);
console.log(digitalLibrary.downloadBook('9780132350884'));
