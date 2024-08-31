class Library{
    constructor(){
        this.books=[];
    }
    addBook(book){
        this.books.push(book);
        return this.books;
    }
}
module.exports=Library;