const loadFromLocalStorage = (myLibrary) => {
  myLibrary = JSON.parse(localStorage.getItem('book')) || [];
  // if (myLibrary) {
  //   showBooks();
  // }
  return myLibrary;
};

export default loadFromLocalStorage;