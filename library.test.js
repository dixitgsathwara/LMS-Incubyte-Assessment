const Library=require('./library')

test('should initialize a library with an empty books array', () => {
    const library = new Library(); 
    expect(library.books).toEqual([]); 
});