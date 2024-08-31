/**
 * Represents a book in the library.
 */
class Book {
    constructor(isbn, title, author, publicationYear) {
        this.isbn = isbn;  // The unique identifier for the book (e.g., ISBN).
        this.title = title;  // The title of the book.
        this.author = author;  // The author of the book.
        this.publicationYear = publicationYear;  // The year the book was published.
        this.isBorrowed = false;  // Boolean flag to indicate if the book is borrowed or available.
    }
}
// --- Exports the Book class for use in other files ---
module.exports = Book;