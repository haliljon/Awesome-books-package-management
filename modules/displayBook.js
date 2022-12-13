const bookDisplayContainer = document.querySelector('.bookDisplayContainer');
const information = JSON.parse(localStorage.getItem('books')) || [];

export default class DisplayBooks {
  displayBook() {
    information.forEach((book) => {
      const bookTitle = document.createElement('p');
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.type = 'button';
      remove.classList.add('remove');
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-div');
      bookTitle.innerHTML = `${book.name} by ${book.author}`;
      bookDiv.append(bookTitle, remove);
      bookDisplayContainer.appendChild(bookDiv);
    });
  }
}
