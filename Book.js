export class Book {
  #isbn;
  constructor(title, author, isbn, available = true){
    this.title = title;
    this.author = author;
    this.#isbn = isbn;
    this.available = available;
  };

  setisbn(updatedIsbn) {
   if (typeof updatedIsbn === 'string' && updatedIsbn.length === 13) {
     this.#isbn = updatedIsbn;
     return `ISBN updated successfully!`;
   } else {
     return "invalid ISBN format. please enter a 13-digit number.";
   }
  }

  getisbn() {
    return this.#isbn;
  }

  borrowBook() {
    if (this.available) {
      this.available = false;
      return `${this.title} has been borrowed by ${this.author}`;
    }
  };

  returnBook() {
    if (!this.available) {
      this.available = true;
      return `${this.title} has been returned by ${this.author}`;
    }
  };
}


