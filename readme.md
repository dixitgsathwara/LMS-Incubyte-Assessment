# Library Management System - TDD Kata (Assessment)

This project is a Library Management System developed using the Test-Driven Development (TDD) approach. The system allows for managing a collection of books, including adding new books, borrowing them, returning them, and viewing available books.


## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the tests](#running-the-tests)
- [Built With](#built-with)
- [Authors](#authors)

## Features

- **Add Book**: Add a new book to the library with a unique ISBN, title, author, and publication year.
- **Borrow Book**: Borrow a book from the library if it is available.
- **Return Book**: Return a borrowed book to the library.
- **View Available Books**: List all books that are currently available in the library.


## Project Structure
```
library-management-system
├── src/
│   ├── library.js        # Library class with all functionalities
│   └── book.js           # Book class representing a book entity
├── tests/
│   └── library.test.js   # Test file for Library class
├── README.md             # Project documentation
├── package.json          # Node.js dependencies and scripts
├── package-lock.json     # Automatically generated, locks dependency versions
├── .gitignore            # Git ignore file specifying files and directories to ignore
└── index.js              # Entry point for the application
```

## Getting Started

Follow the instructions to get the project running on your local machine for development and testing.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Jest](https://jestjs.io/) for testing

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/dixitgsathwara/LMS-Incubyte-Assessment
   ```

2. Navigate to the project directory:

   ```
   cd LMS-Incubyte-Assessment
   ```

3. Install the required packages:
   ```
   npm install
   ```

## Running the tests
   ``
   npm test
   ``

## Built With

- [Node.js](https://nodejs.org/) - The runtime used
- [Jest](https://jestjs.io/) - Testing framework

## Authors

- [Dixit Sathwara](https://github.com/dixitgsathwara) - L.D. College Of Engineering

