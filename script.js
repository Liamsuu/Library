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

// const removeBtn = document.querySelectorAll("button.remove-btn");
// removeBtn.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const mainBox = button.parentElement.parentElement;
//     objectIndex = mainBox.id;
//     myLibrary.splice(objectIndex, 1);
//     displayBooks();
//     // only problem here is I can only remove only after adding a new element, need to fix that bug by
//   });
// });

// function removeBook(element) {
//   const elementBookIndex = element.parentElement.parentElement.id;
//   elementBookIndex = Number(elementBookIndex);
//   myLibrary.splice(elementBookIndex, 1);
//   displayBooks();
// }
