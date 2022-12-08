// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import './vendor/youtube-video';

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
    }
  }
});

swiperPrev1.addEventListener('click', () => {
  swiper1.slidePrev();
});

swiperNext1.addEventListener('click', () => {
  swiper1.slideNext();
});

// swiper reviews
const swiperPrev2 = document.querySelector('[data-swiper-2-prev]');
const swiperNext2 = document.querySelector('[data-swiper-2-next]');
const slides2 = document.querySelectorAll('[data-slide-swiper-2]');

const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  slidesPerView: 1,
});

if (swiper2.realIndex === 0) {
  swiperPrev2.classList.add('disabled');
};

const buttonDisable2 = () => {
  if (swiper2.realIndex === 0) {
    swiperPrev2.classList.add('disabled');
  } else {
    swiperPrev2.classList.remove('disabled');
  };

  if ((swiper2.realIndex >= slides2.length / 2)) {
    swiperNext2.classList.add('disabled');
  } else {
    swiperNext2.classList.remove('disabled');
  };
};

swiper2.on('transitionEnd', function() {
  buttonDisable2();
});

swiperPrev2.addEventListener('click', () => {
  swiper2.slidePrev();
  buttonDisable2();
});

swiperNext2.addEventListener('click', () => {
  swiper2.slideNext();
  buttonDisable2();
});


// youtube
let gymVideo = document.querySelector('[data-gym-video]');
let gymPoster = document.querySelector('[data-gym-poster]');
  let gymButton = document.querySelector('[data-gym-button]');
let player = document.querySelector('[data-player]');

gymVideo.classList.remove('no-js');
player.classList.add('gym__hidden');

gymButton.addEventListener('click', () => {
  gymPoster.classList.add('gym__hidden');
  player.classList.remove('gym__hidden');
  player.play();
});
