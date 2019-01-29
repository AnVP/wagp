'use strict';
var supportContainer = document.querySelector('.footer-page');
var modal = document.querySelector('.modal');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

if (supportContainer) {
  var supportBtn = supportContainer.querySelector('.footer-page__link--support');
}

if (modal) {
  var modalContainer = modal.querySelector('.modal__container');
  var overlay = modal.querySelector('.modal__overlay');
  var close = modal.querySelector('.modal__close');
}

if (supportBtn && modalContainer && overlay && close) {
  var onSupportBtnClick = function (evt) {
    evt.preventDefault();

    modalContainer.classList.add('modal__container--show');
    overlay.classList.add('modal__overlay--show');
  }

  var onCloseClick = function (evt) {
    evt.preventDefault();
    
    modalContainer.classList.remove('modal__container--show');
    overlay.classList.remove('modal__overlay--show');
  }

  var onEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();

      modalContainer.classList.remove('modal__container--show');
      overlay.classList.remove('modal__overlay--show');
    }
  }

  var onEnterPress = function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();

      modalContainer.classList.add('modal__container--show');
      overlay.classList.add('modal__overlay--show');
    }
  }

  var showModal = function() {
    supportBtn.addEventListener('click', onSupportBtnClick);
    window.addEventListener('keydown', onEnterPress);
  }

  var closeModal = function() {
    close.addEventListener('click', onCloseClick);
    overlay.addEventListener('click', onCloseClick);
    window.addEventListener('keydown', onEscPress);
  }

  showModal();
  closeModal();
}