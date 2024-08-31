class Library{
    constructor(){
        this.books=[];
    }
    addBook(book){
        if (!book.isbn || !book.title || !book.author || !book.publicationYear) {
            throw new Error('All fields (ISBN, title, author, publicationYear) are required.');
        }
        if (this.books.some(b => b.isbn === book.isbn)){
            throw new Error('The same ISBN number book is already present.');
        }
        if(book.isbn < 99999){
            throw new Error('The ISBN number length should be greater than 5');
        }
        if(book.publicationYear > new Date().getFullYear()) {
            throw new Error('Write the valid publication year in the past');
        }
        this.books.push(book);
        return this.books;
    }
}
module.exports=Library;