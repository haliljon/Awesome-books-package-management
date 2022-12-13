import { DateTime } from 'luxon';
import DisplayBooks from '../modules/displayBook';
import BookStore from '../modules/storeBook';
import RemoveBook from '../modules/removeBook';
import NavbarFunctionality from '../modules/navbarFunctionality';
import './index.css';

const dateTime = () => {
  let dateTime = DateTime.now();
  dateTime = dateTime.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.querySelector('#current-date-time').innerHTML = dateTime;
};
setInterval(dateTime, 1000);

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
