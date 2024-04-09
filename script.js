const myLibrary = [];

function Book(author, title, pages, read, bookId) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const booksWrapper = document.querySelector("#books-wrapper");

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

function displayBooks() {
  while (booksWrapper.firstChild) {
    booksWrapper.removeChild(booksWrapper.firstChild);
  }
  myLibrary.forEach((objectInstance) => {
    const booksBox = (document.createElement("div").className = "books");
    booksBox.setAttribute("id", myLibrary.indexOf(objectInstance).toString());
    const bookTitle = (document.createElement("h3").className = "book-title");
    const booksInfoSection = (document.createElement("div").className =
      "book-content");
    const authorText = document.createElement("p");
    const pagesText = document.createElement("p");
    const readText = document.createElement("p");
    const removeBtn = (document.createElement("button").className =
      "remove-btn");
    const readBtn = (document.createElement("button").className = "read-btn");
    booksInfoSection.append(
      authorText,
      pagesText,
      readText,
      removeBtn,
      readBtn
    );

    authorText.textContent = `Author: ${objectInstance.author}`;
    pagesText.textContent = `Pages: ${objectInstance.pages}`;
    if (objectInstance.read === true) {
      readText.textContent = `Read: Yes`;
    } else {
      readText.textContent = `Read: No`;
    }
  });
}

// const testerBook = new Book("John Anon", "Test title", 432, true);
const new_book_btn = document.querySelector("#add-book-btn");

new_book_btn.addEventListener("click", (event) => {
  const bookTitleValue = document.querySelector("input#title").value;
  const bookAuthorValue = document.querySelector("input#author").value;
  const bookPagesValue = document.querySelector("input#pages").value;
  const bookReadValue = document.querySelector("input#read").checked;
  // here just get the inputs value and plug it into the object constructor below.

  const bookInstance = new Book(
    bookAuthorValue,
    bookTitleValue,
    bookPagesValue,
    bookReadValue
  );
  addBookToLibrary(bookInstance);
  console.log(myLibrary);
  displayBooks();
  event.preventDefault(); // just stops it refreshing everytime.
});
