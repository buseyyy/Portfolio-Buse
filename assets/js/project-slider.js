const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const indicator = document.querySelector('.slider-indicator');
const thumbnails = document.querySelectorAll('.thumbnails img');

let index = 0;
let autoSlideInterval = null;

function showSlide(i){
  if(i < 0) index = slideImages.length -1;
  else if(i >= slideImages.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(${-index * 100}%)`;
  indicator.textContent = `${index+1} / ${slideImages.length}`;

  // Thumbnail aktifliği
  thumbnails.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === index);
  });
}

// Butonlar
prevBtn.addEventListener('click', ()=> { showSlide(index -1); resetAutoSlide(); });
nextBtn.addEventListener('click', ()=> { showSlide(index +1); resetAutoSlide(); });

// Thumbnail tıklama
thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    showSlide(parseInt(thumb.dataset.index));
    resetAutoSlide();
  });
});

// Otomatik geçiş
function startAutoSlide(){
  autoSlideInterval = setInterval(()=> showSlide(index +1), 5000);
}

function resetAutoSlide(){
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Başlangıç
showSlide(0);
startAutoSlide();
