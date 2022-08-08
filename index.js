// Import changeActivePage from app.js
import changeActivePage from './modules/changePage.js';

import { addBook, removeBook } from './modules/addRemove.js';

// Import now - current date from date.js
import now from './modules/date.js';

const addBtn = document.querySelector('.add-btn');

// Add eventListener to addBtn
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBook();
});

// Select booksContainer
const booksContainer = document.querySelector('.books-container');

// Add event listener to booksContainer to remove book
booksContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    removeBook(e);
  }
});

// select nav links
const navigatorLinks = document.querySelectorAll('.nav');

// display functionality
navigatorLinks.forEach((element) => {
  element.addEventListener('click', () => {
    changeActivePage(element);
  });
});

// Write date to project
document.querySelector('.date').innerHTML = now;