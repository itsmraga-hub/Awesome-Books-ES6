import Book from './book.js';
import loadFromLocalStorage from './localStorage.js';

const bk = new Book();

// eslint-disable-next-line prefer-const
let myLibrary = [];

const resetForm = (form) => {
  form[0].value = '';
  form[1].value = '';
};

const booksContainer = document.querySelector('.books-container');

const showBooks = () => {
  booksContainer.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    booksContainer.innerHTML += `<div class='book' id=${i}>
      <p>"${myLibrary[i].title}" by ${myLibrary[i].author}</p>
      <button class="btnRemove">Remove</button>
    </div>`;
  }
};

const form = document.querySelector('.form');

const getBookData = (form) => {
  const book = new Book(form[0].value, form[1].value);
  return book;
};

const addBook = () => {
  if (form) {
    const book = getBookData(form);
    bk.addBook(book, myLibrary);
    showBooks();
    resetForm(form);
  }
};

const removeBook = (e) => {
  bk.deleteBook(e, myLibrary);
};

// Use localStorage to load books and show them
myLibrary = loadFromLocalStorage(myLibrary);
showBooks();

export { addBook, removeBook };