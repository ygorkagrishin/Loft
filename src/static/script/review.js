(function (){
'use strict';

var data = document.querySelectorAll('[data-popup]'),
    popup,
    closePopup = document.querySelectorAll('.js-popup-close');
    
/* 
    Получаем значение атрибута data-,
    посде чего находим попап и добвляем класс active
*/

function handler(e) {
  e.preventDefault();
  
  popup = 
    document.querySelector(this.getAttribute('data-popup'));

  if (!popup.classList.contains('active'))
    return popup.classList.add('active');
}   

/* 
    Определяем по пременной активный попап
    и удаляем у него класс active
*/

function close() {
  if (popup.classList.contains('active'))
    return popup.classList.remove('active');
}

/* 
    Проходим циклом по кнопкам и вешаем на них обработчики
*/
for ( var i=0, len=closePopup.length-1; i<=len; i++ )
  closePopup[i].addEventListener('click', close);

for ( var i=0, len=data.length-1; i<=len; i++ )
  data[i].addEventListener('click', handler);

})();