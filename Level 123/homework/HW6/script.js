let customerOrders = [
    {
        orderId: 1001,
        customerId: 5001,
        items: [
            { title: "javascript: the good parts", price: 15.99, quantity: 1 },
            { title: "eloquent javascript", price: 20.99, quantity: 2 }
        ],
        shippingAddress: "123 main st, anytown, usa",
        isDelivered: true
    },
    {
        orderId: 1002,
        customerId: 5002,
        items: [
            { title: "you don't know js", price: 12.99, quantity: 1 },
            { title: "programming typescript", price: 25.99, quantity: 1 }
        ],
        shippingAddress: "456 oak ave, somewhere, usa",
        isDelivered: false
    },
    {
        orderId: 1003,
        customerId: 5003,
        items: [
            { title: "clean code", price: 30.99, quantity: 1 },
            { title: "design patterns", price: 22.99, quantity: 1 },
            { title: "refactoring", price: 18.99, quantity: 3 }
        ],
        shippingAddress: "789 pine rd, elsewhere, usa",
        isDelivered: true
    },
    {
        orderId: 1004,
        customerId: 5004,
        items: [],
        shippingAddress: "101 cedar ln, nowhere, usa",
        isDelivered: false
    }
]

// Task 1: Check if all orders have at least one item
let allOrdersHaveItems = customerOrders.every(order => order.items.length > 0)
console.log("all orders have items:", allOrdersHaveItems)

// Task 2: Check if there is at least one order that has not been delivered
let hasPendingDelivery = customerOrders.some(order => !order.isDelivered)
console.log("has pending delivery:", hasPendingDelivery)

// Task 3 & 4: Process each order and its items
customerOrders.forEach(order => {
    console.log(`processing order id: ${order.orderId}`)

    // Task 4: Process each item in the order
    order.items.forEach(item => {
        console.log(` - ${item.title} (quantity: ${item.quantity})`)
    })
})

// Task 5: Check if all books in each order are expensive
customerOrders.forEach(order => {
    let allExpensive = order.items.every(item => item.price > 10)
    console.log(`order ${order.orderId} contains only expensive books: ${allExpensive}`)
})

// Task 6: Check if any book in each order has multiple copies
customerOrders.forEach(order => {
    let hasMultipleCopies = order.items.some(item => item.quantity > 1)
    console.log(`order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`)
})
