let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider .slides img');
  const dots = document.querySelectorAll('.dot');
  
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));

  slides[currentIndex].style.display = 'block';
  dots[currentIndex].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentIndex -= 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentIndex += 1);
});

document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.getAttribute('data-index'));
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);
