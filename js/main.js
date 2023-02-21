const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".slide");
const buttons = [prevBtn, nextBtn];
let currentSlide = 0;
let latestSlide = slides.length - 1;

slides.forEach((slide, index) => {
  slide.style.transform = `translate(${index * 100}%)`;
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value == "-") {
      if (currentSlide === 0) {
        currentSlide = latestSlide;
      } else {
        currentSlide--;
      }
    } else {
      if (currentSlide === latestSlide) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
    }

    slides.forEach((slide, index) => {
      let calculatePercent = 100 * (index - currentSlide);
      slide.style.transform = `translateX(${calculatePercent}%)`;
    });
  });
});