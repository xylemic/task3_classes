Library Management System
Summary
This Node.js library provides a comprehensive solution for managing books in a library environment. It includes the following features:
 * Book Class: Represents individual books with properties like ISBN, title, author, publication year, and availability status.
 * Library Class: Manages a collection of books, including methods for borrowing, returning, adding, and removing books.
 * DigitalLibrary Class: Extends the Library class with additional functionality for downloading digital books.
 * Encapsulation: The ISBN property is encapsulated using private fields and getter methods.
 * Module Imports: The require function is used to import modules, following Node.js best practices.

Testing
The library includes unit tests using Jest to ensure its correctness and reliability. To run the tests, use the following command:
npm test
