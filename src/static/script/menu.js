(function () {
'use strict';

// Base element
var menuIcon = document.querySelector('.js-menu-trig'),
    menuMain = document.querySelector('.js-navbar'),
    menuLinks = menuMain.getElementsByTagName('a'),
    menuClose = document.querySelector('.js-navbar-close');

// Open menu
function openMenu() {
  SCROLL = false;

  if (!menuMain.classList.contains('active'))
    return menuMain.classList.add('active');
}

menuIcon.addEventListener('click', openMenu);

// Close menu
function closeMenu() {
  SCROLL = true;

  if (menuMain.classList.contains('active'))
    return menuMain.classList.remove('active');
}

for (var i=0, len=menuLinks.length-1; i<=len; i++)
  menuLinks[i].addEventListener('click', closeMenu);

menuClose.addEventListener('click', closeMenu);

})();