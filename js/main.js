const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let latestSlide = slides.length - 1;

slides.forEach((slide,index)=>{
  slide.style.transform = `translate(${index*100}%)`
})

nextBtn.addEventListener("click", () => {
  if (currentSlide === latestSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach((slide, index) => {
    let calculatePercant = 100 * (index - currentSlide);
    slide.style.transform = `translateX(${calculatePercant}%)`;
  });
});

prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = latestSlide;
  } else {
    currentSlide--;
  }

  slides.forEach((slide, index) => {
    let calculatePercant = 100 * (index - currentSlide);
    slide.style.transform = `translateX(${calculatePercant}%)`;
  });
});