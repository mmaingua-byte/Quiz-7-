const carousel = document.querySelector('.carousel-images');
const dots = document.querySelectorAll('.nav-item');
const nav = document.querySelector('.carousel-nav');
let currentIndex = 0;
const totalItems = dots.length;

// Function to show a specific slide
function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentIndex = index;
}

// Event delegation for navigation dots
nav.addEventListener('click', (e) => {
  if (!e.target.classList.contains('nav-item')) return;

  const newIndex = parseInt(e.target.dataset.index);
  if (newIndex === currentIndex) return;

  showSlide(newIndex);
});

