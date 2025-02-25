function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    function changePassword(newPassword) {
        this.password = newPassword;
    }
    function getDetails() {
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
    
}