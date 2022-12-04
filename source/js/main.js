import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  // form
  let inputName = document.querySelector('[data-name-input]');
  let inputPhone = document.querySelector('[data-phone-input]');

  inputName.oninput = () => {
    if (inputName.value.length < 2) {
      inputName.classList.add('is-invalid');
    } else {
      inputName.classList.remove('is-invalid');
    }
  };

  let keyPressHandler1 = (evt) => {
    if (evt.keyCode !== 43) {
      if (evt.keyCode < 47 || evt.keyCode > 57) {
        evt.preventDefault();
      }
    }
  };

  let keyPressHandler2 = (evt) => {
    if (evt.keyCode < 47 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  };

  inputPhone.addEventListener('keypress', keyPressHandler1);

  inputPhone.oninput = () => {
    if (inputPhone.value.length > 0) {
      inputPhone.addEventListener('keypress', keyPressHandler2);
      inputPhone.removeEventListener('keypress', keyPressHandler1);
    } else {
      inputPhone.addEventListener('keypress', keyPressHandler1);
      inputPhone.removeEventListener('keypress', keyPressHandler2);
    }

    if (inputPhone.value[0] === '+') {
      if (inputPhone.value.length < 2) {
        inputPhone.classList.add('is-invalid');
      } else {
        inputPhone.classList.remove('is-invalid');
      }
    } else {
      if (inputPhone.value.length < 1) {
        inputPhone.classList.add('is-invalid');
      } else {
        inputPhone.classList.remove('is-invalid');
      }
    }
  };

  inputName.oninput = () => {
    if (inputName.value.length < 2) {
      inputName.classList.add('is-invalid');
    } else {
      inputName.classList.remove('is-invalid');
    }
  };
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
