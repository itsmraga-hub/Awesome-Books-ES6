export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  deleteBook = (e, myLibrary) => {
    e.target.parentElement.remove();
    myLibrary.splice(e.target.parentElement.id, 1);
    localStorage.setItem('book', JSON.stringify(myLibrary));
  };

  addBook = (book, myLibrary) => {
    myLibrary.push(book);
    localStorage.setItem('book', JSON.stringify(myLibrary));
  }
}
