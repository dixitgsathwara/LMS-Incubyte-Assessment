/**
 * Represents a library management system.
 * Allows adding, borrowing, returning, and viewing books.
 */

class Library {
   
    //--- Initializes an empty array to store books. ---

    constructor() {
        this.books = []; 
    }

    //--- Adds a new book to the library after validating it. ---
    
    addBook(book) {
        this.validateBook(book);  
        this.checkDuplicateISBN(book);  
        this.validateISBNLength(book);  
        this.validatePublicationYear(book);

        this.books.push(book);  
    }

    //--- Borrows a book from the library using its ISBN. ---
     
    borrowBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn); 

        this.checkBookIsAvailableInTheLibrary(book);  
        this.checkBookIsBorrowedOrNot(book);  

        return 'Book borrowed successfully';  
    }

    //--- Returns a borrowed book to the library using its ISBN. ---

    returnBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn); 
        this.checkBookIsAvailableInTheLibrary(book);  
        this.checkBookWasBorrowedOrNot(book);  

        return 'Book is return successfully';  
    }

    //--- Shows all available (not borrowed) books in the library. ---

    showAvailableBooks() {
        return this.books.filter(b => !b.isBorrowed);  
    }

    //---  Validates that the book has all required fields. ---

    validateBook(book) {
        if (!book.isbn || !book.title || !book.author || !book.publicationYear) {
            throw new Error('All fields (ISBN, title, author, publicationYear) are required');
        }
    }

    //--- Checks if the book with the same ISBN already exists in the library. ---

    checkDuplicateISBN(book) {
        if (this.books.some(b => b.isbn === book.isbn)) {
            throw new Error('The same ISBN number book is already present');
        }
    }

    //--- Validates that the ISBN length is greater than 5. ---

    validateISBNLength(book) {
        if (book.isbn.toString().length <= 5) {
            throw new Error('The ISBN number length should be greater than 5');
        }
    }

    //--- Validates that the publication year is in the past. ---

    validatePublicationYear(book) {
        const currentYear = new Date().getFullYear();
        if (book.publicationYear > currentYear) {
            throw new Error('Write the valid publication year in the past');
        }
    }

    //--- Checks if a book is available in the library. ---
     
    checkBookIsAvailableInTheLibrary(book) {
        if (!book) {
            throw new Error('Book not found');
        }
    }

    //--- Checks if a book is already borrowed or not.---

    checkBookIsBorrowedOrNot(book) {
        if (book.isBorrowed) {
            throw new Error('Book is already borrowed');
        } else {
            book.isBorrowed = true;  
        }
    }

    //--- Checks if a book was borrowed or not.---

    checkBookWasBorrowedOrNot(book) {
        if (!book.isBorrowed) {
            throw new Error('Book was not borrowed');
        } else {
            book.isBorrowed = false;  
        }
    }
}

// --- Exports the Library class for use in other files ---

module.exports = Library;