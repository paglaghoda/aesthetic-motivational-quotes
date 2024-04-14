const quoteElement = document.getElementById('quote');
const body = document.body; // For background color changes

function displayNewQuote() {
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const selectedQuote = data[randomIndex];

            quoteElement.textContent = selectedQuote.text;
            // You'll likely want to add the author as well

            // Change background color (modify as desired)
            body.style.backgroundColor = getRandomColor(); 
        });
}

function getRandomColor() {
    // Simple random color for now - explore palettes if you want
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initial call
displayNewQuote();

// ... (You might want to replace the refresh with a button)
