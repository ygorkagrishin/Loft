(function () {
'use strict';

var acco = document.querySelector('#js-acco'),
    sections = acco.children;

function toAllCloseSections(array) {
  for (var i=0, len=sections.length-1; i<=len; i++) {
    var section = sections[i];

    toCloseCurrentSection(section);
  }
}

function toCloseCurrentSection(sect) {
  var section = sect;
  
  if (section.classList.contains('active')) {
    section.classList.remove('active');
  }
  var content = section.getElementsByClassName('acco__cont')[0];
  content.parentNode.removeAttribute('style');  
}

function toOpenCurrentSection(sect) {
  var section = sect;

  toAllCloseSections();

  if (!section.classList.contains('active')) {
    section.classList.add('active');
  }

  var content = section.getElementsByClassName('acco__cont')[0];
  content.parentNode.style.height = content.offsetHeight+'px';
}

function handler(e) {
  var currentSection = this;

  !currentSection.classList.contains('active') ?
  toOpenCurrentSection(currentSection) : toCloseCurrentSection(currentSection);
}

for (var i=0, len=sections.length-1; i<=len; i++) {
  var section = sections[i];

  section.addEventListener('click', handler, false);
}

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