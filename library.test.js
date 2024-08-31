const Library=require('./library')
const Book=require('./book')
describe("Library Management System", () => {
    let library;

    beforeEach(() => {
        library = new Library(); 
    });

    test('should initialize a library with an empty books array', () => {
        expect(library.books).toEqual([]); 
    });

    test("should add and return added book", () => {
        let book1 = new Book(123456, 'Introduction to the Theory of Computation', 'Michael Sipser', 2012);
        library.addBook(book1);
        expect(library.books).toContain(book1);
    });
    
    test("should not add book with any missing field(isbn,title,author,publicationYear)",()=>{
        let book1=new Book(123456,'','Michael Sipser',2012);
        expect(()=>library.addBook(book1)).toThrow('All fields (ISBN, title, author, publicationYear) are required.')
    })
});