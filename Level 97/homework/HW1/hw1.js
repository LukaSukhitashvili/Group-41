let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    publishYear: 1925,

    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.publishYear}`;
        
    }
    
}