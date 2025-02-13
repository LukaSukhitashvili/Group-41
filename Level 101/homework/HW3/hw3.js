let hotel = {
    hotelName: "Georgian Palace",
    stars: 4,
    location: "Tbilisi",
    guestReviews: {
        guest1: "Excellent service",
        guest2: "Great location",
        guest3: "Nice rooms"
    }
};


console.log(hotel);

console.log(hotel.hasOwnProperty('spa'));

let rooms = {
    roomsCount: 150
}
Object.assign(hotel, rooms);

Object.freeze(hotel);
hotel.stars = 5;

console.log(Object.isFrozen(hotel));
