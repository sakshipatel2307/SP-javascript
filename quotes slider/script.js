const quotes = [
    { text: "You are what you believe in.", author: " The Bhagavad Geeta" },
    { text: "Man is made by his belief", author: "Lord Shree Krishna" },
    { text: "Everything is an illusion.", author: "Lord Shiva" },
    { text: "You are stronger than your fears and doubts.", author: "Lord Hanuman" },
    { text: "Truth is the highest dharma.", author: "The Ramayana" }
];

let currentIndex = 0;

const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateQuote() {
    quoteElement.textContent = `"${quotes[currentIndex].text}"`;
    authorElement.textContent = `- ${quotes[currentIndex].author}`;
}

function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote();
}

function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    updateQuote();
}

nextButton.addEventListener('click', nextQuote);
prevButton.addEventListener('click', prevQuote);


// setInterval(nextQuote, 3000);


updateQuote();