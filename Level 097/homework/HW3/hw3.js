let movie = {
    title: "Harry Potter",
    director: "Chris Columbus",
    releaseYear: 2001,
    duration: "2 hour",

    getMovieInfo: function () {
        console.log(`The movie ${this.title} was directed by ${this.director} and was released in ${this.releaseYear}.`);
}