//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI() {}

UI.prototype.addBookToList = (book) => {
  const list = document.getElementById('book-list');
  
  //Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row);
}


UI.prototype.deleteBook = (target) => {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove()
  }
}

UI.prototype.clearFields = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

//Show Alert
UI.prototype.showAlert = (message, className) => {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container')
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form)
  // Timeout after 3 seconds
  setTimeout(() => {
    document.querySelector('.alert').remove();
  },3000);
}


//Event Listener For Add Book
document.getElementById('book-form').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  

  // Instantiate book
 const book = new Book (title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
    
  } else {
    ui.showAlert('Book Added', 'success');
    // Add book to list
    ui.addBookToList(book);
  
    // Clear input fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listeners For Delete Button
document.getElementById('book-list').addEventListener('click', (e) => {
  // Instantiate UI
   const ui = new UI();
  
  // Delete Book
  ui.deleteBook(e.target)

  // Show Delete Alert 
  ui.showAlert('Book Removed!', 'success')
  e.preventDefault();
});




