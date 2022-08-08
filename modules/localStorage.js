const loadFromLocalStorage = (myLibrary) => {
  myLibrary = JSON.parse(localStorage.getItem('book')) || [];
  return myLibrary;
};

export default loadFromLocalStorage;