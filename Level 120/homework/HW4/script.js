let books = {
    "1984": "george orwell",
    "to kill a mockingbird": "harper lee",
    "the great gatsby": "f. scott fitzgerald",
    "pride and prejudice": "jane austen",
    "the catcher in the rye": "j.d. salinger"
}

let bookTitles = []

for (let title in books) {
    bookTitles.push(title)
}

console.log(bookTitles)
