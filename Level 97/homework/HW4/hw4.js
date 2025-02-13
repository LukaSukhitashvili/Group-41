let ticket = {
    eventName: "Concert",
    eventDate: "2021-12-30",
    price: 50,
    isAvailable: true,
    purchaseTicket: function() {
        if (this.isAvailable) {
            console.log("Ticket purchased");
        } else {
            console.log("Ticket not available");
        }
    }
}