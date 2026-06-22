import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import Swiper from "swiper/bundle";

new Swiper(".swiper-hero", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const buttonsClient = document.querySelectorAll(".client__tab-btn");
new Swiper(".swiper-client", {
  loop: false,
  spaceBetween: 32,
  navigation: {
    prevEl: buttonsClient[0],
    nextEl: buttonsClient[1],
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

const buttonsReviews = document.querySelectorAll(".reviews__button");
new Swiper(".swiper-reviews", {
  loop: false,
  spaceBetween: 32,
  navigation: {
    prevEl: buttonsReviews[0],
    nextEl: buttonsReviews[1],
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 2,
    },
  },
});
