// ფუნქცია, რომელიც გამოიძახება ღილაკზე დაჭერისას
// Function that gets called when the button is clicked
function styleParagraphs() {
    // ვიღებთ ყველა <p> ელემენტს
    // Get all <p> elements
    const paragraphs = document.getElementsByTagName('p');

    // გადავუვლით თითოეულ პარაგრაფს და შევცვლით მის სტილს
    // Loop through each paragraph and modify its style
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = '#e3f2fd';
        paragraphs[i].style.color = '#1565c0';
        paragraphs[i].style.fontWeight = 'bold';
        paragraphs[i].style.borderRadius = '5px';
        paragraphs[i].style.transition = 'all 0.3s ease';
    }
}