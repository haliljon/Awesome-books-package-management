const awesomeBooks = document.querySelector('.allAwesomeBooks');
const addBook = document.querySelector('#addBook');
const contact = document.querySelector('.contact');

export default class NavbarFunctionality {
  static showList() {
    awesomeBooks.style.display = 'block';
    contact.style.display = 'none';
    addBook.style.display = 'none';
  }

  static showNew() {
    awesomeBooks.style.display = 'none';
    contact.style.display = 'none';
    addBook.style.display = 'block';
  }

  static showContact() {
    awesomeBooks.style.display = 'none';
    contact.style.display = 'block';
    addBook.style.display = 'none';
  }
}
