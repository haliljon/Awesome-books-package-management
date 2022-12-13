const information = JSON.parse(localStorage.getItem('books')) || [];
const bookDisplayContainer = document.querySelector('.bookDisplayContainer');

export default class RemoveBook {
  static removeBook(button, index) {
    bookDisplayContainer.removeChild(button.parentElement);
    information.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(information));
  }
}
