// select displayed elements
const mainContainer = document.querySelector('.main-container');
const formSection = document.querySelector('.form-section');
const contact = document.querySelector('.contact');

const changeActivePage = (element) => {
  if (element.id === 'list') {
    mainContainer.style.display = 'block';
    formSection.classList.remove('form-sectionActive');
    contact.classList.remove('contactActive');
  } else if (element.id === 'add') {
    mainContainer.style.display = 'none';
    formSection.classList.add('form-sectionActive');
    contact.classList.remove('contactActive');
  } else if (element.id === 'contact') {
    mainContainer.style.display = 'none';
    formSection.classList.remove('form-sectionActive');
    contact.classList.add('contactActive');
  }
};

export default changeActivePage;