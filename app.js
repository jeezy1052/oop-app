//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI() {}




//Event Listeners
document.getElementById('book-form').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  

  // Instantiate book
  const book = new Book(title, author, isbn);


  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book)
  


  e.preventDefault();
});