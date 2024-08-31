const Library=require('./library')

describe("Library Management System", () => {
    let library;

    beforeEach(() => {
        library = new Library(); 
    });

    test('should initialize a library with an empty books array', () => {
        expect(library.books).toEqual([]); 
    });
});