
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.img-proyect');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

function updateSlider() {
  const width = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

next.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener('resize', updateSlider);
