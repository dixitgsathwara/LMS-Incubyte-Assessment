class Book{
    constructor(isbn, title, author, publicationYear) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.isBorrowed = false; 
    }
}
module.exports=Book;