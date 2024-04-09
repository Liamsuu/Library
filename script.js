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
  const object = myLibrary[myLibrary.length - 1];
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

// const testerBook = new Book("John Anon", "Test title", 432, true);
const new_book_btn = document.querySelector("#add-book-btn");

new_book_btn.addEventListener("click", (event) => {
  const bookNumber = myLibrary.length;
  const bookTitle = document.querySelector("input#title");
  const bookTitleValue = bookTitle.value;
  const bookAuthor = document.querySelector("input#author");
  const bookAuthorValue = bookAuthor.value;
  const bookPages = document.querySelector("input#pages");
  const bookPagesValue = bookPages.value;
  const bookRead = document.querySelector("input#read");
  const bookReadValue = bookRead.checked;
  // here just get the inputs value and plug it into the object constructor below.

  const bookInstance = new Book(
    bookAuthorValue,
    bookTitleValue,
    bookPagesValue,
    bookReadValue,
    bookNumber
  );
  addBookToLibrary(bookInstance);
  console.log(myLibrary);
  displayBooks();
  event.preventDefault(); // just stops it refreshing everytime.
});
