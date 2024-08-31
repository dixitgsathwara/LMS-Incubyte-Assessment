class Library{
    constructor(){
        this.books=[];
    }
    addBook(book) {
        this.validateBook(book);
        this.checkDuplicateISBN(book);
        this.validateISBNLength(book);
        this.validatePublicationYear(book);
        
        this.books.push(book);
    }

    borrowBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        
        this.checkBookIsAvailableInTheLibrary(book);
        this.checkBookIsBorrowedOrNot(book);

        return 'Book borrowed successfully';
    }

    validateBook(book) {
        if (!book.isbn || !book.title || !book.author || !book.publicationYear) {
            throw new Error('All fields (ISBN, title, author, publicationYear) are required');
        }
    }

    checkDuplicateISBN(book) {
        if (this.books.some(b => b.isbn === book.isbn)) {
            throw new Error('The same ISBN number book is already present');
        }
    }

    validateISBNLength(book) {
        if (book.isbn.toString().length <= 5) {
            throw new Error('The ISBN number length should be greater than 5');
        }
    }

    validatePublicationYear(book) {
        const currentYear = new Date().getFullYear();
        if (book.publicationYear > currentYear) {
            throw new Error('Write the valid publication year in the past');
        }
    }

    checkBookIsAvailableInTheLibrary(book){
        if (!book) {
            throw new Error('Book not found');
        }
    }
    
    checkBookIsBorrowedOrNot(book){
        if (book.isBorrowed) {
            throw new Error('Book is already borrowed');
        }
        else{
            book.isBorrowed = true;
        }
    }

}
module.exports=Library;