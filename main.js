const images = [
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
];

let current = 0;

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderDots = document.getElementById('sliderDots');

function updateSlider() {
  sliderImage.src = images[current];
  prevBtn.style.display = current === 0 ? 'none' : 'block';
  nextBtn.style.display = current === images.length - 1 ? 'none' : 'block';
  updateDots();
}

function updateDots() {
  sliderDots.innerHTML = '';
  images.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (idx === current ? ' active' : '');
    dot.addEventListener('click', () => {
      current = idx;
      updateSlider();
    });
    sliderDots.appendChild(dot);
  });
}

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (current < images.length - 1) {
    current++;
    updateSlider();
  }
});


updateSlider();

