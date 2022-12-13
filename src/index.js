import DisplayBooks from '../modules/displayBook';
import BookStore from '../modules/storeBook';
import RemoveBook from '../modules/removeBook';
import NavbarFunctionality from '../modules/navbarFunctionality';
import './index.css';

const displayBooks = new DisplayBooks();
const storeBook = new BookStore();
const removeBook = new RemoveBook();
const navbarFunctionality = new NavbarFunctionality();

/* eslint-disable no-restricted-globals */
const bookDisplayContainer = document.querySelector('.bookDisplayContainer');
const form = document.querySelector('form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

const list = document.querySelector('#list');
const addNew = document.querySelector('#addNew');
const contactLink = document.querySelector('#contact');
const addBook = document.querySelector('#addBook');
// class BookList {
//   information = JSON.parse(localStorage.getItem('books')) || [];

// storeBook() {
//   const newBook = {
//     name: title.value,
//     author: author.value,
//   };
//   this.information.push(newBook);
//   localStorage.setItem('books', JSON.stringify(this.information));
//   return newBook;
// }

// displayBooks() {
//   this.information.forEach((book) => {
//     const bookTitle = document.createElement('p');
//     const remove = document.createElement('button');
//     remove.textContent = 'Remove';
//     remove.type = 'button';
//     remove.classList.add('remove');
//     const bookDiv = document.createElement('div');
//     bookDiv.classList.add('book-div');
//     bookTitle.innerHTML = `${book.name} by ${book.author}`;
//     bookDiv.append(bookTitle, remove);
//     bookDisplayContainer.appendChild(bookDiv);
//   });
// }

// removeBook(button, index) {
//   bookDisplayContainer.removeChild(button.parentElement);
//   this.information.splice(index, 1);
//   localStorage.setItem('books', JSON.stringify(this.information));
//   location.reload();
// }

// static showList() {
//   awesomeBooks.style.display = 'block';
//   contact.style.display = 'none';
//   addBook.style.display = 'none';
// }

// static showNew() {
//   awesomeBooks.style.display = 'none';
//   contact.style.display = 'none';
//   addBook.style.display = 'block';
// }

// static showContact() {
//   awesomeBooks.style.display = 'none';
//   contact.style.display = 'block';
//   addBook.style.display = 'none';
// }
// }

// const bookCollection = new BookList();
// bookCollection.displayBooks();
displayBooks.displayBook();
addBook.style.display = 'block';
const remove = document.querySelectorAll('.remove');

remove.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    removeBook.removeBook(btn, index);
  });
});

if (bookDisplayContainer.childElementCount === 0) {
  const defaultMessage = document.createElement('p');
  defaultMessage.classList.add('text-center', 'fs-3');
  defaultMessage.innerText = 'No Awesome Books';
  bookDisplayContainer.appendChild(defaultMessage);
}

form.addEventListener('submit', (e) => {
  if (title.value !== null && author.value !== null) {
    storeBook.storeBook();
    location.reload();
    title.value = '';
    author.value = '';
  }
  e.preventDefault();
});

list.addEventListener('click', (e) => {
  e.preventDefault();
  navbarFunctionality.showList();
});

addNew.addEventListener('click', (e) => {
  e.preventDefault();
  navbarFunctionality.showNew();
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  navbarFunctionality.showContact();
});
