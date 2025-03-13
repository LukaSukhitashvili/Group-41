// ფუნქცია, რომელიც ცვლის HTML კონტენტს
// Function that changes HTML content
function changeHTML() {
    // ვიღებთ ელემენტს ID-ის მიხედვით
    // Get element by ID
    const contentDiv = document.getElementById('content');

    // ვცვლით HTML კონტენტს
    // Change HTML content
    contentDiv.innerHTML = `
        <h2 style="color: #2196F3">Changed Content!</h2>
        <p>This content was added using <strong>innerHTML</strong>.</p>
        <ul>
            <li>Can add new HTML elements</li>
            <li>Supports <em>formatting</em></li>
            <li>Changes entire HTML structure</li>
        </ul>
    `;
}