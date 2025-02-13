let store = {
    storeName: "Smart Electronics",
    products: 250,
    location: "Tbilisi Mall",
    customerReviews: {
        user1: "Great selection",
        user2: "Helpful staff",
        user3: "Competitive prices"
    }
};


console.log(store);

console.log(store.hasOwnProperty('discount'));

let employee = {
    employeeCount: 45
}
Object.assign(store, employee);

Object.freeze(store);
store.products = 300;

console.log(Object.isFrozen(store));
