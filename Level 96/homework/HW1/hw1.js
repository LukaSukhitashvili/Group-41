let book = {
    bookTitle: "Harry Potter",
    bookAuthor: "J.K. Rowling",
    bookRelease: 1997,
    bookGenre: "Fantasy",
    bookPrice: "20$"
};


console.log(book.bookTitle);
console.log(book.bookAuthor);
console.log(book.bookRelease);
console.log(book.bookGenre);
console.log(book.bookPrice);


console.log(book["bookTitle"]);
console.log(book["bookAuthor"]);
console.log(book["bookRelease"]);
console.log(book["bookGenre"]);
console.log(book["bookPrice"]);


let sentence = `The book titled "${book.bookTitle}" is authored by ${book.bookAuthor}, released in the year ${book.bookRelease}. It belongs to the ${book.bookGenre} genre and is priced at ${book.bookPrice}.`;
console.log(sentence);
