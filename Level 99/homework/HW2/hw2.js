function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getCarInfo = function() {
        return `${this.brand} ${this.model} (${this.year})`;
    };

let car1 = new Car('Toyota', 'Corolla', 2020);
let car2 = new Car('Honda', 'Civic', 2019);
let car3 = new Car('Ford', 'Mustang', 2021);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car3.getCarInfo());
