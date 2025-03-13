// ფუნქცია, რომელიც გამოიძახება ღილაკზე დაჭერისას
// Function that gets called when the button is clicked
function highlightItems() {
    // ვიღებთ ყველა ელემენტს კლასის სახელის მიხედვით
    // Get all elements by class name
    const items = document.getElementsByClassName('highlight-item');

    // გადავუვლით თითოეულ ელემენტს და შევცვლით მის სტილს
    // Loop through each element and modify its style
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = '#ffeb3b';
        items[i].style.border = '2px solid #ffc107';
        items[i].style.transform = 'scale(1.05)';
        items[i].style.transition = 'all 0.3s ease';
    }
}

/* 
getElementsByClassName მეთოდის დანიშნულება:
- პოულობს ყველა ელემენტს მითითებული კლასის სახელით
- აბრუნებს HTMLCollection ობიექტს (მსგავსია მასივის)
- კოლექცია ავტომატურად ახლდება DOM-ის ცვლილებებთან ერთად

Purpose of getElementsByClassName:
- Finds all elements with the specified class name
- Returns an HTMLCollection object (array-like)
- Collection updates automatically with DOM changes
*/