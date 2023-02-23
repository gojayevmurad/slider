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

// #region third slider
//! THIRD SLIDER ELEMENTS
const thirdSliderPrevBtn = document.querySelector(".third--slider__btn--prev");
const thirdSliderNextBtn = document.querySelector(".third--slider__btn--next");
const thirdSliderSlides = document.querySelectorAll(".third--slider__slide");
const thirdSliderControllers = document.querySelector(
  ".third--slider__controllers"
);
const thirdSliderButtons = [thirdSliderPrevBtn, thirdSliderNextBtn];
let thirdSliderCurrentSlide = 0;
let thirdSliderLatestSlide = thirdSliderSlides.length - 1;

//! THIRD SLIDER FUNCTIONS
thirdSliderSlides.forEach((slide, index) => {
  slide.style.transform = `translate(${index * 100}%)`;
  let control = `<div id="${index}" class="third--slider__controller"></div>`;
  thirdSliderControllers.innerHTML += control;
});

// CONTROLS WITH DOTS
let arr = document.querySelectorAll(".third--slider__controller");
arr = Array.from(arr);
arr[thirdSliderCurrentSlide].classList.add("active");

arr.forEach((el) => {
  el.addEventListener("click", () => {
    arr[thirdSliderCurrentSlide].classList.remove("active");
    console.log(typeof el.id);
    thirdSliderCurrentSlide = +el.id;
    arr[thirdSliderCurrentSlide].classList.add("active");
    changePosition();
  });
});

thirdSliderButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    arr[thirdSliderCurrentSlide].classList.remove("active");
    if (e.target.value == "-") {
      if (thirdSliderCurrentSlide === 0) {
        thirdSliderCurrentSlide = thirdSliderLatestSlide;
      } else {
        thirdSliderCurrentSlide--;
      }
    } else {
      if (thirdSliderCurrentSlide === thirdSliderLatestSlide) {
        thirdSliderCurrentSlide = 0;
      } else {
        thirdSliderCurrentSlide++;
      }
    }
    arr[thirdSliderCurrentSlide].classList.add("active");

    changePosition();
  });
});

function changePosition() {
  thirdSliderSlides.forEach((slide, index) => {
    let calculatePercent = 100 * (index - thirdSliderCurrentSlide);
    slide.style.transform = `translateX(${calculatePercent}%)`;
  });
}

// #endregion third slider
