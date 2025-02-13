function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  function getSummary() {
    console.log(`${title} was written by ${author} in ${year}`);
  }
}

let book1 = new Book("Harry Potter", "J.K. Rowling", 1997);

let book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

let book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
