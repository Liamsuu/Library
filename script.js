const myLibrary = [];

function Book(author, title, pages, read, bookId) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookId = bookId;
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

function displayBooks() {
  for (const object of myLibrary) {
    const book_wrapper = document.querySelector("#books-wrapper");
    const book_div = document.createElement("div");
    book_div.className = "books";
    book_wrapper.appendChild(book_div);
    const title = document.createElement("h3");
    title.className = "book-title";
    title.textContent = object.title;
    book_div.appendChild(title);
    const book_content = document.createElement("div");
    book_content.className = "book-content"; // append content like author, etc.. inside here.
    book_div.appendChild(book_content);
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    author.textContent = `Author: ${object.author}`;
    pages.textContent = `Pages: ${object.pages}`;
    if (object.read === true) {
      read.textContent = `Read: Yes`;
    } else if (object.read === false) {
      read.textContent = `Read: No`;
    }
    book_content.appendChild(author);
    book_content.appendChild(pages);
    book_content.appendChild(read);
  }
}

const testerBook = new Book("John Anon", "Test title", 432, true);
const new_book_btn = document.querySelector("#add-book-btn");
addBookToLibrary(testerBook);
displayBooks();

new_book_btn.addEventListener("click", () => {
  const bookNumber = myLibrary.length();
  const bookTitle = document.querySelector("input#title");
  const bookAuthor = document.querySelector("input#author");
  const bookPages = document.querySelector("input#pages");
  const bookRead = document.querySelector("input#read");
  // here just get the inputs value and plug it into the object constructor below.

  if (bookNumber === 0) {
    window["book" + bookNumber] = new Book(); // complete soon
  } // if i forget this is because i need a 'dynamic variable' to hold object
});

// create event listener for button where it first delets everything in DOM when clicked
// then adds whatever book to array and then again display the updated array with the new book

// const book_wrapper = document.querySelector("#books-wrapper");
