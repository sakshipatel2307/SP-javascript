const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateSlider() {
    const width = images[currentIndex].width;
    slides.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// // Auto-slide every 3 seconds
// setInterval(nextSlide, 3000);