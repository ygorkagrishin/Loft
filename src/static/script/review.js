(function (){
'use strict';

var data = document.querySelectorAll('[data-popup]'),
    popup = document.querySelectorAll('.review__popup'),
    closePopup = document.querySelectorAll('.js-popup-close');
  
var currentPopup;

function handler(e) {
  e.preventDefault();
  
  currentPopup = document.querySelector(this.getAttribute('data-popup'));

  !currentPopup.classList.contains('active') ? 
  open(currentPopup) : close(currentPopup);
}   

function open(modal) {
  SCROLL = false;

  return currentPopup.classList.add('active');
}

function close(modal) {
  SCROLL = true;

  return currentPopup.classList.remove('active');
}

for ( var i=0, len=closePopup.length-1; i<=len; i++ ) {
  closePopup[i].addEventListener('click', close);
}

for ( var i=0, len=data.length-1; i<=len; i++ ) {
  data[i].addEventListener('click', handler);
}
})();