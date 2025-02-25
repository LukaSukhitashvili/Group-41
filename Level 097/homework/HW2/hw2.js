let customer = {
    firstName: "Luka",
    lastName: "Sukhitashvili",
    email: "sukhitaluka@gmail.com",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }

    updateEmail: function(newEmail) {
        this.email = newEmail;
    }
}