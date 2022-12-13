const information = JSON.parse(localStorage.getItem('books')) || [];
const title = document.querySelector('.title');
const author = document.querySelector('.author');

export default class BookStore {
  storeBook() {
    const newBook = {
      name: title.value,
      author: author.value,
    };
    information.push(newBook);
    localStorage.setItem('books', JSON.stringify(information));
    return newBook;
  }
}
