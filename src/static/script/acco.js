(function () {
'use strict';

var acco = document.querySelector('#js-acco'),
    sects = acco.getElementsByClassName('js-acco-sect');

function openSect(sect) {
  for (var i=0, len=sects.length-1; i<=len; i++)
    closeSect(sects[i]);

  var cont = sect.querySelector('.js-acco-box'),
      contHeight = cont.firstChild.offsetHeight + 'px';

  if (!sect.classList.contains('active'))
    sect.classList.add('active');

  cont.style.height = contHeight;
}

function closeSect(sect) {
  var cont = sect.querySelector('.js-acco-box');

  if (sect.classList.contains('active'))
    sect.classList.remove('active');

  cont.removeAttribute('style');
}

function handler() {
  var sect = this;

  !sect.classList.contains('active') ? 
  openSect(sect) : closeSect(sect); 
}

for (var i=0, len=sects.length-1; i<=len; i++)
  sects[i].addEventListener('click', handler, false);
})();


/* 
    Не большая функция для вертикального аккордеона.
    Голову сломал и как то так.
*/
var hor = (function () {
var sect = document.querySelectorAll('.js-h-acco-sect');

var closeSect = function (currentSect) {
  var currentSect = currentSect,
      currentCont = currentSect.getElementsByClassName('js-h-acco-fade')[0];

  if (currentSect.classList.contains('active'))
    currentSect.classList.remove('active');
    
  if (currentCont.classList.contains('js-h-acco-fade--in')) {
    currentCont.classList.remove('js-h-acco-fade--in');
    currentCont.classList.add('js-h-acco-fade--out');
  }
}

var openSect = function (currentSect) {
  var currentSect = currentSect,
      currentCont = currentSect.getElementsByClassName('js-h-acco-fade')[0];
        
  for ( var i=0, len=sect.length-1; i<=len; i++ ) closeSect(sect[i]);

  if ( !currentSect.classList.contains('active') ) currentSect.classList.add('active');

  if ( currentCont.classList.contains('js-h-acco-fade--out') ) {
    currentCont.classList.remove('js-h-acco-fade--out');
    currentCont.classList.add('js-h-acco-fade--in');
  }
}

var handler = function (e) {
  var self = this;

  if ( !self.classList.contains('active') ) openSect(self);
  else closeSect(self);
}

for ( var i=0, len=sect.length-1; i<=len; i++ )
  sect[i].addEventListener('click', handler);

})();