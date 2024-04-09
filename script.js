const myLibrary = [];

function Book(author, title, pages, read) {
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
    const booksBox = document.createElement("div");
    booksBox.className = "books";
    booksBox.setAttribute("id", myLibrary.indexOf(objectInstance).toString());

    const bookTitle = document.createElement("h3");
    bookTitle.className = "book-title";
    bookTitle.textContent = objectInstance.title;

    const booksInfoSection = document.createElement("div");
    booksInfoSection.className = "book-content";

    const authorText = document.createElement("p");
    const pagesText = document.createElement("p");
    const readText = document.createElement("p");

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
      myLibrary.splice(Number(removeBtn.parentElement.parentElement.id), 1);
      displayBooks();
    };

    const readBtn = document.createElement("button");
    readBtn.className = "read-btn";
    readBtn.textContent = "Read?";
    readBtn.onclick = function () {
      if (
        myLibrary[Number(readBtn.parentElement.parentElement.id)].read == true
      ) {
        myLibrary[Number(readBtn.parentElement.parentElement.id)].read = false;
      } else {
        myLibrary[Number(readBtn.parentElement.parentElement.id)].read = true;
      }
      displayBooks();
    };

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
    booksBox.append(bookTitle, booksInfoSection);
    booksWrapper.appendChild(booksBox);
  });
}

// const testerBook = new Book("John Anon", "Test title", 432, true);
// const new_book_btn = document.querySelector("#add-book-btn");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
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
