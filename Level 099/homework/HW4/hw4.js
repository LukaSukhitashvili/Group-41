let product1 = {
    productName: "Laptop",
    price: 1200,
    quantity: 5,
    isAvailable: true
};

let product2 = {
    productName: "Smartphone",
    price: 800,
    quantity: 0,
    isAvailable: false
};

let product3 = {
    productName: "Tablet",
    price: 300,
    quantity: 10,
    isAvailable: true
};

let inventory = {
    product1: product1,
    product2: product2,
    product3: product3,
    displayAvailableProducts: function() {
        if (this.product1.isAvailable) {
            if (this.product1.quantity > 0) {
                console.log(`Product: ${this.product1.productName}, Price: ${this.product1.price}, Quantity: ${this.product1.quantity}`);
            }
        }
        if (this.product2.isAvailable) {
            if (this.product2.quantity > 0) {
                console.log(`Product: ${this.product2.productName}, Price: ${this.product2.price}, Quantity: ${this.product2.quantity}`);
            }
        }
        if (this.product3.isAvailable) {
            if (this.product3.quantity > 0) {
                console.log(`Product: ${this.product3.productName}, Price: ${this.product3.price}, Quantity: ${this.product3.quantity}`);
            }
        }
    }
};

inventory.displayAvailableProducts();
