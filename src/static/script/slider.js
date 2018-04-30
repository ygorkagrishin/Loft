(function () {
'use strict';

// Base elements
var carousel = document.querySelector('#carousel'),
    wrapper = carousel.firstChild,
    slides = wrapper.children;

// Control buttons
var prev = document.querySelector('.js-arrow-prev'),
    next = document.querySelector('.js-arrow-next');

// Counter slides
var index = 0,
    max_index;

// Touch events
var x, y, newX, newY, xDiff, yDiff;

// Options
var duration = 700;

// Autoplay
var autoplay,
    autoplaySpeed = 5000;

// Clone 
var clone = slides[0].cloneNode(true);

wrapper.appendChild(clone);

max_index = slides.length-1;

// Components
var comp = document.querySelectorAll('.caro__comp'),
    compClose = document.querySelectorAll('.caro__comp-close');

function prevSlide() {
  --index;
  
  if (index < 0)
    defPrev();
  
  closeCompAll();  
  setTimeout(moveWrap, 20);
}

prev.addEventListener('click', function () {
  clearInterval(autoplay);

  prevSlide();
});

function nextSlide() {
  ++index;

  if (index > max_index) 
    defNext();

  closeCompAll();  
  setTimeout(moveWrap,20);
}

next.addEventListener('click', function () {
  clearInterval(autoplay);
  
  nextSlide();
});

function openComp(c) {
  clearInterval(autoplay);

  return c.classList.add('active');
}

function closeComp(c) {
  return c.classList.remove('active');
}

function closeCompAll() {
  for (var i=0, len=comp.length-1; i<=len; i++) {
    var c = comp[i];

    if (c.classList.contains('active'))
      return closeComp(c);
  }
}

function handler() {
  var comp = this;
  !comp.classList.contains('active') ? 
  openComp(comp) : closeComp(comp); 
}

for (var i=0, len=compClose.length-1; i<=len; i++) {
  comp[i].addEventListener('click', handler, false);
  compClose[i].addEventListener('click', handler, false);
}


carousel.addEventListener('touchstart', function (e) {
  var touches = e.changedTouches[0];

  x = touches.clientX;
  y = touches.clientY;
});

carousel.addEventListener('touchmove', function () {
  clearInterval(autoplay);
});

carousel.addEventListener('touchend', function (e) {
  var touches = e.changedTouches[0];

  newX = touches.clientX;
  newY = touches.clientY;

  xDiff = x - newX;
  yDiff = y - newY;

  if (Math.abs(yDiff) >= Math.abs(xDiff))
    return;

  if (x > newX) 
    nextSlide();
  else
    prevSlide();
});



autoplay = setInterval(nextSlide, autoplaySpeed);



function moveWrap() {
  var style = wrapper.style;  
  
  style['transition'] = 'all '+ duration +'ms';
  style['transform'] = 'translateX(-'+ index +'00%)';
}

function def() {
  var style = wrapper.style;

  style['transition'] = '0ms';
  style['transform'] = 'translateX(-'+ index +'00%)';
}

function defPrev() {
  index = max_index;
  def();
  
  prevSlide();
}

function defNext() {  
  index = 0; 
  def();

  nextSlide();
}

})();