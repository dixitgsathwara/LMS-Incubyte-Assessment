const readline = require('readline');
const Library = require('./src/library');
const Book = require('./src/book');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const library = new Library();

//--- Function to prompt the user for input and handle different options ---
function mainMenu() {
    console.log('\n<--- Library Management System --->');
    console.log('1. Add Book');
    console.log('2. Borrow Book');
    console.log('3. Return Book');
    console.log('4. Show Available Books');
    console.log('5. Exit');

    rl.question('\nSelect an option: ', (option) => {
        switch (option) {
            case '1':
                addBook();
                break;
            case '2':
                borrowBook();
                break;
            case '3':
                returnBook();
                break;
            case '4':
                showAvailableBooks();
                break;
            case '5':
                console.log('Exiting...From LMS!');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please try again.');
                mainMenu();
                break;
        }
    });
}

//--- Function to add a book ---
const addBook = () => {
    rl.question('Enter ISBN: ', (isbn) => {
        rl.question('Enter Title: ', (title) => {
            rl.question('Enter Author: ', (author) => {
                rl.question('Enter Publication Year: ', (publicationYear) => {
                    try {
                        const book = new Book(Number(isbn), title, author, Number(publicationYear));
                        library.addBook(book);
                        console.log('Book added successfully!');
                    } catch (error) {
                        console.log(`Error: ${error.message}`);
                    }
                    mainMenu();
                });
            });
        });
    });
}

//--- Function to borrow a book ---
const borrowBook = () => {
    rl.question('Enter ISBN of the book to borrow: ', (isbn) => {
        try {
            const message = library.borrowBook(Number(isbn));
            console.log(message);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
        mainMenu();
    });
}

//--- Function to return a book ---
const returnBook = () => {
    rl.question('Enter ISBN of the book to return: ', (isbn) => {
        try {
            const message = library.returnBook(Number(isbn));
            console.log(message);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
        mainMenu();
    });
}

//--- Function to show available books ---
const showAvailableBooks = () => {
    const availableBooks = library.showAvailableBooks();
    if (availableBooks.length === 0) {
        console.log('No books are currently available.');
    } else {
        console.log('\nAvailable Books:');
        availableBooks.forEach((book, index) => {
            console.log(`${index + 1}. ISBN: ${book.isbn}, Title: ${book.title}, Author: ${book.author}, Year: ${book.publicationYear}`);
        });
    }
    mainMenu();
}

//--- Start the main menu loop ---
mainMenu();
