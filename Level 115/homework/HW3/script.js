let sliderContainer = document.querySelector('.slider-container');
let slides = document.querySelectorAll('.slide');
let dotsContainer = document.querySelector('.dots-container');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let currentIndex = 0;
let interval;

function createDots() {
    slides.forEach((_, index) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            stopSlider();
            goToSlide(index);
            startSlider();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    let dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = index;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    slides[currentIndex].classList.add('active');
    updateDots();
}

function startSlider() {
    interval = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 3500);
}

function stopSlider() {
    clearInterval(interval);
}

prevButton.addEventListener('click', () => {
    stopSlider();
    goToSlide(currentIndex - 1);
    startSlider();
});

nextButton.addEventListener('click', () => {
    stopSlider();
    goToSlide(currentIndex + 1);
    startSlider();
});

sliderContainer.addEventListener('mouseenter', stopSlider);
sliderContainer.addEventListener('mouseleave', startSlider);

createDots();
startSlider();
