import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import Swiper from "swiper/bundle";
import { _slide } from "./functions/slide";
import { initPhoneMask } from "./functions/phone-mask";

document.addEventListener("DOMContentLoaded", () => {
  initPhoneMask();
});

new Swiper(".swiper-hero", {
  loop: true,
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
      slidesPerView: 1.25,
      slidesPerGroup: 1,
      spaceBetween: 16
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      paceBetween: 16
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
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
      slidesPerView: 1.25,
      slidesPerGroup: 1,
      spaceBetween: 16
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 2,
    },
  },
});

document
  .querySelectorAll(".faq-spoilers__item")
  .forEach((item) => (item.lastElementChild.style.display = "none"));

addEventListener("click", (event) => {
  const item = event.target.closest(".faq-spoilers__item");
  if (!item) return;

  const button = item.firstElementChild;
  const content = item.lastElementChild;

  if (content.classList.contains("slide")) return;

  if (item.classList.contains("faq-spoilers__item_active")) {
    item.parentElement._openedSpoiler = null;
    item.classList.remove("faq-spoilers__item_active");
    _slide.up(content);
  } else {
    if (item.parentElement._openedSpoiler) {
      item.parentElement._openedSpoiler.classList.remove(
        "faq-spoilers__item_active",
      );
      _slide.up(item.parentElement._openedSpoiler.lastElementChild);
    }

    item.classList.add("faq-spoilers__item_active");
    item.parentElement._openedSpoiler = item;
    _slide.down(content);
  }
});

const buttonsArticles = document.querySelectorAll(".articles__button");
new Swiper(".swiper-articles", {
  loop: false,
  spaceBetween: 32,
  navigation: {
    prevEl: buttonsArticles[0],
    nextEl: buttonsArticles[1],
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

let servicesSwiper = null;

function initServicesSlider() {
  const isMobile = window.innerWidth <= 992;

  // Если мобилка И слайдер еще не создан
  if (isMobile && !servicesSwiper) {
    servicesSwiper = new Swiper(".services-section__grid", {
      slidesPerView:
        "auto" /* Карточки займут столько места, сколько указано в их CSS (например, 240px) */,
      spaceBetween: 15 /* Отступ между слайдами на мобилке */,
      centeredSlides: false /* Слайды прижаты к левому краю */,
      grabCursor: true /* Курсор-ручка при наведении */,
    });
  }
  // Если десктоп И слайдер сейчас запущен — уничтожаем его
  else if (!isMobile && servicesSwiper) {
    // Передаем (true, true), чтобы Swiper удалил все свои инлайн-стили и служебные классы
    servicesSwiper.destroy(true, true);
    servicesSwiper = null;
  }
}

// Запускаем при загрузке страницы и при каждом изменении размера экрана
window.addEventListener("DOMContentLoaded", initServicesSlider);
window.addEventListener("resize", initServicesSlider);
