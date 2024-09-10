// import { Book } from './Book.js';
// import { DigitalLibrary } from './DigitalLibrary.js';
// import { Library } from './Library.js'

// const digitalLibrary = new DigitalLibrary();
// const lib = new Library();

// // adding books
// lib.addBook(new Book('To Kill a Mockingbird', 'Harper Lee', '9780141951755'));
// lib.addBook(new Book('Eloquent JavaScript', 'Marijn Haverbeke', '9781593279509', false));
// console.log(lib);


// // test 1: adding duplicate book
// // console.log(lib.addBook(new Book('To Kill a Mockingbird', 'Harper Lee', '9780141951755')));

// // Test 2: borrow and return book
// const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565');
// // lib.addBook(book1);
// // console.log(book1.borrowBook());
// // console.log(book1.borrowBook());
// // console.log(book1.returnBook());
// // console.log(book1.returnBook());

// // Test 3: remove a book
// // console.log(lib.removeBook('9780743273565'));
// // console.log(lib.removeBook('9780743273565'));

// // Test 4: Find book by title
// console.log(lib.findBookByTitle('Eloquent JavaScript'));
// console.log(lib.findBookByTitle('To Kill a Mockingbird'));
// console.log(lib.findBookByTitle('unknown book'));


// // Test 5: Update ISBN
// const book2 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
// lib.addBook(book2);
// console.log(book2.setisbn('9780596517749'));
// console.log(book2.getisbn());

// // Test 6: Download a book that doesn’t exist
// console.log(digitalLibrary.downloadBook('1234567890123'));

// // test 7: download a book that is available
// const book3 = new Book('Clean Code', 'Robert C. Martin', '9780132350884');
// lib.addBook(book3);
// console.log(digitalLibrary.downloadBook('9780132350884'));
