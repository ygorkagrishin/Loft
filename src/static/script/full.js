(function () {
'use strict';

// Base elements
var container = document.querySelector('#js-container'),
    sections = container.children;

// Nabaigator
var navigator = document.querySelector('.js-nav'),
    dots = navigator.getElementsByTagName('a');

// data-
var data = 'data-anchor',
    dataArray = [];

// Options
var duration = 700;

// Touch events
var x, 
    y, 
    newX, 
    newY;

var position = 0, 
    maxPosition = sections.length-1;

function getValueFromData() {
    for (var i=0, len=dots.length-1; i<=len; i++) {
        if (dots[i].hasAttribute(data)) {
            dataArray.push(dots[i].getAttribute(data));
        }
    }
}

getValueFromData();

function toSetIdSections() {
    for (var i=0, len=sections.length-1; i<=len; i++) {
        if (!sections[i].hasAttribute(data)) {
            sections[i].id = dataArray[i];
        }
    }
}

toSetIdSections();

/* 
    Функция получает значение атрибута data- и передает его функции toLookingForTargetSection. 
*/
function handler(e) {
    e.preventDefault();

    var value = this.getAttribute(data);
    toLookingForTargetSection(value);
}

/* 
    Проходим по секциям и, сравнивает переданное значение data- из фунции handler с id секции,
    если совпадение true то в переменную counterSections записывается индекс секции с нужным id.
    Далее в функцию moveSect передается секция соответствующая индексу.  
*/
function toLookingForTargetSection(vl) {
    for (var i=0, len=sections.length-1; i<=len; i++) {
        if (sections[i].id === vl) {
            position = i;
        }
    }

    return toGetCoordTop(sections[position]);
}

/* 
    У секции вычисляется значение offsetTop для смещение контейнера равной полученному значению.
*/
function toGetCoordTop(sect) {
    var currentSect = sect,
        currentSectCoord = currentSect.offsetTop;

    toMoveContainer(currentSectCoord);
}

function toMoveContainer(coord) {
    container.style = 
        'transform: translateY(-'+ coord +'px);  \
            transition: all '+ duration +'ms';

    viewActiveDots(position);
}

/* 
    Для отображения в навигаторе секции, которая в данный момент просматривается, 
    используем значение position. Добавляем класс active ссылке в навигаторе, 
    которая имеет индекс равный значению position. 
    Так как sections === dots && dots === sections.
*/
function viewActiveDots(index) {
    var currentDot = dots[index];
    
    for (var i=0, len=dots.length-1; i<=len; i++) {
        var dot = dots[i];

        if (dot.classList.contains('active')) {
            dot.classList.remove('active');
        }
    }

    if (!currentDot.classList.contains('active')) {
        currentDot.classList.add('active');
    }
}

viewActiveDots(position);

container.addEventListener('touchstart', function (e) {
/* 
Если в касании участвует больше одного пальца, false.
*/
    if (e.touches.length !== 1) 
        return;

/* 
Получаем координаты точек касания.
*/
    var touch = e.changedTouches[0];

    x = touch.screenX;
    y = touch.screenY
});

container.addEventListener('touchmove', function (e) {
/* 
Отменяем действие по умолчанию для ipad, iphone
*/
    e.preventDefault();
});

container.addEventListener('touchend', function (e) {
    var touch = e.changedTouches[0];

/* 
Получаем точек завершения касания.
*/
    newX = touch.screenX;
    newY = touch.screenY;

/* 
Сравниваем. Если смещение по оси y больше чем по x значит, пользователь листает.
*/
    if (Math.abs(x-newX) >= Math.abs(y-newY)) return;

/* 
Если начальное значение больше конечного.
Пользователь листает вниз. Если меньше листает вверх.
*/
    if (position !== maxPosition && y > newY) {
        toGetCoordTop(sections[++position]); 
    } 
    else if (position !== 0 && y < newY) {
        toGetCoordTop(sections[--position]); 
    }  
});

var dataEvents = document.querySelectorAll('['+ data +']');

for (var i=0, len=dataEvents.length-1; i<=len; i++) {
    dataEvents[i].addEventListener('click', handler);
}
})();