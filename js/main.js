//#region First slider

//! FIRST SLIDER ELEMENTS
const firstSliderPrevBtn = document.querySelector(".btn-prev");
const firstSliderNextBtn = document.querySelector(".btn-next");
const firstSliderSlides = document.querySelectorAll(".slide");
const firstSliderButtons = [firstSliderPrevBtn, firstSliderNextBtn];
let firstSliderCurrentSlide = 0;
let firstSliderLatestSlide = firstSliderSlides.length - 1;

//! FIRST SLIDER FUNCTIONS
firstSliderSlides.forEach((slide, index) => {
  slide.style.transform = `translate(${index * 100}%)`;
});

firstSliderButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value == "-") {
      if (firstSliderCurrentSlide === 0) {
        firstSliderCurrentSlide = firstSliderLatestSlide;
      } else {
        firstSliderCurrentSlide--;
      }
    } else {
      if (firstSliderCurrentSlide === firstSliderLatestSlide) {
        firstSliderCurrentSlide = 0;
      } else {
        firstSliderCurrentSlide++;
      }
    }

    firstSliderSlides.forEach((slide, index) => {
      let calculatePercent = 100 * (index - firstSliderCurrentSlide);
      slide.style.transform = `translateX(${calculatePercent}%)`;
    });
  });
});

// #endregion First slider

//#region Second slider

const secondSliderSlides = document.querySelectorAll(".second--slider__slide");
const secondSliderPrevBtn = document.querySelector(
  ".second--slider__btn--prev"
);
const secondSliderNextBtn = document.querySelector(
  ".second--slider__btn--next"
);
const secondSliderButtons = [secondSliderNextBtn, secondSliderPrevBtn];
let secondSliderCurrentSlide = 0;
let secondSliderLatestSlide = secondSliderSlides.length - 1;

secondSliderSlides.forEach((slide, index) => {
  slide.style.transform = `translate(${index * 100}%)`;
});

secondSliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value == "-") {
      if (secondSliderCurrentSlide == 0) {
        secondSliderCurrentSlide = secondSliderLatestSlide;
      } else {
        secondSliderCurrentSlide--;
      }
    } else {
      if (secondSliderCurrentSlide == secondSliderLatestSlide) {
        secondSliderCurrentSlide = 0;
      } else {
        secondSliderCurrentSlide++;
      }
    }

    secondSliderSlides.forEach((slide, index) => {
      let calculatePercent = 100 * (index - secondSliderCurrentSlide);
      slide.style.transform = `translateX(${calculatePercent}%)`;
    });
  });
});

//#endregion Second slider

