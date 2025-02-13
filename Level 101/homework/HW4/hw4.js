let cinema = {
    cinemaName: "Rustaveli Cinema",
    moviesCount: 6,
    location: "Rustaveli Avenue",
    movieReviews: {
        user1: "Great sound system",
        user2: "Comfortable seats",
        user3: "Modern facility"
    }
};


console.log(cinema);

console.log(cinema.hasOwnProperty('vipSeats'));

let ticket = {
    ticketPrice: 15
}
Object.assign(cinema, ticket);

Object.freeze(cinema);
cinema.moviesCount = 8;

console.log(Object.isFrozen(cinema));
