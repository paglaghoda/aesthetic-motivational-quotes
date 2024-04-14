const quoteElement = document.getElementById('quote');

// Sample quotes (you'll ideally fetch these from an external source)
const quotes = [
    "The journey of a thousand miles begins with a single step.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do."
];

function displayNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];

    // Add code to change background color here (see below)
}

// Call initially on page load
displayNewQuote(); 

// Call on refresh (you might want a button instead for a 'fun project')
window.addEventListener('load', displayNewQuote);
