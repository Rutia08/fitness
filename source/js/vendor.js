// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';


// youtube
let gymVideo = document.querySelector('[data-gym-video]');
let gymLink = document.querySelector('[data-gym-link]');
let button = document.querySelector('[data-gym-button]');
let url = gymVideo.getAttribute('data-video-url');

gymLink.removeAttribute('href');

let videoId = /^https?\:\/\/(www\.)?youtu\.be/.test(url) ? url.replace(/^https?\:\/\/(www\.)?youtu\.be\/([\w-]{11}).*/, '$2') : url.replace(/.*\?v\=([\w-]{11}).*/, '$1');

function createIfrarme(str) {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('src', genereateURL(str));
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay');
  return iframe;
}

gymVideo.addEventListener('click', () => {
  let iframe = createIfrarme(videoId);
  gymLink.remove();
  button.remove();
  gymVideo.appendChild(iframe);
});

function genereateURL(id) {
  const query = '?rel=0showinfo=0&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + query;
}


const couches = document.querySelector('[data-couches]');
const reviews = document.querySelector('[data-reviews]');
couches.classList.remove('nojs');
reviews.classList.remove('nojs');

/* eslint-disable */
// swiper couches
const swiperPrev1 = document.querySelector('[data-swiper-1-prev]');
const swiperNext1 = document.querySelector('[data-swiper-1-next]');

const swiper1 = new Swiper('.swiper-1', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

swiperPrev1.addEventListener('click', () => {
  swiper1.slidePrev();
});

swiperNext1.addEventListener('click', () => {
  swiper1.slideNext();
});

const slidesDuplicate = document.querySelectorAll('.swiper-slide-duplicate');
slidesDuplicate.forEach((el) => {
  el.removeAttribute('tabindex');
});

// swiper reviews
const swiperPrev2 = document.querySelector('[data-swiper-2-prev]');
const swiperNext2 = document.querySelector('[data-swiper-2-next]');
const slides2 = document.querySelectorAll('[data-slide-swiper-2]');

const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  slidesPerView: 1,
});

const disable = (el) => {
  el.classList.add('disabled');
  el.setAttribute('disabled', '');
  el.setAttribute('tabindex', '-1');
};

const enable = (el) => {
  el.classList.remove('disabled');
  el.removeAttribute('disabled');
  el.removeAttribute('tabindex');
};

disable(swiperPrev2);

const buttonChanger = () => {
  if (swiper2.realIndex === 0) {
    disable(swiperPrev2);
  } else {
    enable(swiperPrev2);
  }

  if ((swiper2.realIndex >= slides2.length / 2)) {
    disable(swiperNext2);
  } else {
    enable(swiperNext2);
  }
};

swiper2.on('transitionEnd', () => {
  buttonChanger();
});

swiperPrev2.addEventListener('click', () => {
  swiper2.slidePrev();
  buttonChanger();
});

swiperNext2.addEventListener('click', () => {
  swiper2.slideNext();
  buttonChanger();
});
