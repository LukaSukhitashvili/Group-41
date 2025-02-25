let library = {
    name: "National Library",
    location: "Tbilisi",
    books: {
        bookOne: {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
        },
        bookTwo: {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        }
    },
    listBooks: function() {
        console.log(`this book's name is ${this.books.bookOne.title} you can find this book at ${this.name} in ${this.location} its author is ${this.books.bookOne.author} and it was published in ${this.books.bookOne.year}`);
        console.log(`this book's name is ${this.books.bookTwo.title} you can find this book at ${this.name} in ${this.location} its author is ${this.books.bookTwo.author} and it was published in ${this.books.bookTwo.year}`);
    }
}