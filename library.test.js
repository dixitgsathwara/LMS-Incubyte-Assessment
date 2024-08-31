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

    describe('test cases for added book',()=>{

        test("should add and return added book", () => {
            let book1 = new Book(123456, 'Introduction to the Theory of Computation', 'Michael Sipser', 2012);
            library.addBook(book1);
            expect(library.books).toContain(book1);
        });
        
        test("should not add book with any missing field(isbn,title,author,publicationYear)",()=>{
            let book1=new Book(123456,'','Michael Sipser',2012);
            expect(()=>library.addBook(book1)).toThrow('All fields (ISBN, title, author, publicationYear) are required')
        })
    
        test("should not add a book with an duplicate ISBN which is already present",()=>{
            let book1 = new Book(123456, 'Introduction to the Theory of Computation', 'Michael Sipser', 2012);
            library.addBook(book1);
            expect(()=>library.addBook(book1)).toThrow('The same ISBN number book is already present')
        })
    
        test("should not add a if ISBN number length is less than 6",()=>{
            let book1 = new Book(123, 'Introduction to the Theory of Computation', 'Michael Sipser', 2012);
            expect(()=>library.addBook(book1)).toThrow('The ISBN number length should be greater than 5')
        })
    
        test("should not enter the invalid publicationYear in the past",()=>{
            let book1 = new Book(123456, 'Introduction to the Theory of Computation', 'Michael Sipser', 20120);
            expect(()=>library.addBook(book1)).toThrow('Write the valid publication year in the past');
        })
    })

    test("should not borrowed book if it's not added to the library",()=>{
        expect(()=>library.borrowBook(123456)).toThrow('Book not found');
    })
    test("should not borrowed book if it's not availabe",()=>{
        let book1 = new Book(123456, 'Introduction to the Theory of Computation', 'Michael Sipser', 2012);
        library.addBook(book1);
        library.borrowBook(123456);
        expect(()=>library.borrowBook(123456)).toThrow('Book is already borrowed');
    })
    test("should borrowed book if it's availabe",()=>{
        let book1 = new Book(123456, 'Introduction to the Theory of Computation', 'Michael Sipser', 2012);
        library.addBook(book1);
        expect(library.borrowBook(123456)).toBe('Book borrowed successfully');
    })


});