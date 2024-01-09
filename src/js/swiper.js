// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Autoplay, Mousewheel } from "swiper";

new Swiper(".js-feature-slider", {
  modules: [Autoplay],
  allowTouchMove: false,
  slidesPerView: "auto",
  spaceBetween: 60,
  speed: 10000,
  loop: true,
  autoplay: {
    delay: 0,
  },
});

new Swiper(".js-banner-text-slider", {
  modules: [Autoplay],
  allowTouchMove: false,
  slidesPerView: "auto",
  speed: 10000,
  loop: true,
  autoplay: {
    delay: 0,
  },
});
// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  loop: true,
});

const swipe2 = new Swiper(".swiper2", {
  // configure Swiper to use modules
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 20,
});

const swipe3 = new Swiper(".swiper3", {
  // configure Swiper to use modules
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 20,
  centeredSlides: true,
});

new Swiper(".leadership-short-slider", {
  // configure Swiper to use modules

  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {

    992: {
      loop: false,
      centeredSlides: true,


      slidesPerView: 3,
      centeredSlides: false,
    },
  }
});

new Swiper(".mosaic-swiper", {
  // configure Swiper to use modules

  modules: [Mousewheel],
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  observeParents: true,
  observer: true,
  mousewheel: false,
  mousewheel: {
    eventsTarget: ".asasasaas",
    releaseOnEdges: false,
    sensitivity: 5,
  },

  breakpoints: {

    992: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 60,
      mousewheel: true,
      mousewheel: {
        eventsTarget: ".mosaic-swiper",
        releaseOnEdges: true,
        sensitivity: 5,
      },

    },
  }
});

new Swiper(".swiper-big-image", {
  // configure Swiper to use modules
  loop: false,
  slidesPerView: 1.1,
  spaceBetween: 20,

  breakpoints: {

    992: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  }
});
