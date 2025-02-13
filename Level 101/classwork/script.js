let academy = {
    name: "GOA",
    courses: "web development",
    socialLink: "https://www.facebook.com/nika11keshelava",
    reviews: {
        user1: {
            name: "luka",
            status: "child",
            review: "best academy in the world"
        },
        user2: {
            name: "irina",
            status: "parent",
            review: "best decision for my child"
        },
        user3: {
            name: "nika",
            status: "child",
            review: "best decision i ever made"
        }
    }
};

let addMember = {
    member: "optimus prime"
};

console.log(Object.entries(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

console.log(Object.hasOwn(academy, "name"));

console.log(Object.assign(academy, addMember));

console.log(Object.freeze(academy));

console.log(Object.isFrozen(academy));