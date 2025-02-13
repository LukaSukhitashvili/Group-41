let sportsClub = {
    clubName: "Dinamo Tbilisi",
    sportType: "Football",
    foundedYear: 1925,
    achievements: {
        title1: "Georgian League Champion",
        title2: "Georgian Cup Winner",
        title3: "UEFA Cup Winners Cup"
    }
};


console.log(Object.keys(sportsClub));

console.log(Object.values(sportsClub));

console.log(sportsClub.hasOwnProperty('sponsors'));

let capacity = {
    stadiumCapacity: 54000
}
Object.assign(sportsClub, capacity);

Object.freeze(sportsClub);
sportsClub.clubName = "New Name";

console.log(Object.isFrozen(sportsClub));
