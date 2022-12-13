const bookDisplayContainer = document.querySelector('.bookDisplayContainer');

export default class DisplayBooks {
  information = JSON.parse(localStorage.getItem('books')) || [];

  displayBook() {
    this.information.forEach((book) => {
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
