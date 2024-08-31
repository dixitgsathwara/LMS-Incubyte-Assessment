class Library{
    constructor(){
        this.books=[];
    }
    addBook(book){
        if (!book.isbn || !book.title || !book.author || !book.publicationYear) {
            throw new Error('All fields (ISBN, title, author, publicationYear) are required.');
        }
        this.books.push(book);
        return this.books;
    }
}
module.exports=Library;