class Book {
  #isbn; // Private field, it cannot be access outside the class.

  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.#isbn = isbn;
    this.available = true;
  }

  // Getter for ISBN
  get isbn() {
    return this.#isbn;
  }

  // Setter for ISBN to prevent modification
  set isbn(value) {
    throw new Error('ISBN cannot be modified');
  }

  borrowBook() {
    if (this.available) {
      this.available = false;
      console.log(`You have successfully borrowed '${this.title}'`);
    } else {
      console.log(`This '${this.title}' is not available.`);
    }
  }

  returnBook() {
    this.available = true;
    console.log(`'${this.title}' is now available.`);
  }
}

class Library {
  constructor() {
      this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`'${book.title}' by ${book.author} added to the library.`);
  }

  removeBook(isbn) {
    const index = this.books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1);
      console.log(`'${removedBook[0].title}' has been removed from the library.`);
    } else {
      console.log(`Book with ISBN ${isbn} not found.`);
    }
  }

  findBookByTitle(title) {
    const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (book) {
      return `Found: '${book.title}' by ${book.author} (Available: ${book.available ? 'Yes' : 'No'})`;
    }
    return `No book with title '${title}' found.`;
  }
}

class DigitalLibrary extends Library {
  downloadBook(isbn) {
    const book = this.books.find(book => book.isbn === isbn);
    if (book) {
      if (book.available) {
        console.log(`Downloading '${book.title}' by ${book.author}...`);
      } else {
        console.log(`Sorry, '${book.title}' by ${book.author} is not available for download.`);
      }
    } else {
      console.log(`Book with ISBN ${isbn} not found.`);
    }
  }
}

// Example usage:

const book1 = new Book('The gods are not to blame', 'Ola Rotimi', '1133248076');
const book2 = new Book('This fall apart', 'Chinua Achebe', '0013006723');
const book3 = new Book('Open Heaven', 'Pastor E.A Adeboye', '1122334455')

const library = new DigitalLibrary();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.findBookByTitle('the gods are not to blame'));
library.downloadBook("1133258076");

book1.borrowBook(); 
library.downloadBook("1234567890");

book1.returnBook();
library.removeBook("0987654321");
