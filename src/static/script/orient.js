window.addEventListener('orientationchange', function() {
    var orientation = screen.orientation || screen.msOrientation || screen.mozOrientation,
        err = document.querySelector('.page__landscape-err');
    
    if (!orientation) return;

    switch(orientation.angle) {
        case 0:
            /* 
                Если не произошло поворота устройства или 
                устройство вернулось в исходную точку в 0 градусов, 
                у элемента удаляется класс active.
            */
            if ( err.classList.contains('active') ) {
                err.classList.remove('active');

                SCROLL = true;
            }
            break; 
        case 90:
            /* 
                Если происходит поворот устройства на 90 градусов, 
                элементу устанавливается класс active.
            */
            if ( !err.classList.contains('active') ) {
                err.classList.add('active');

                SCROLL = false;
            }
            break;
        case -90: 
            /* 
                Если происходит поворот устройства на -90 градусов, 
                элементу устанавливается класс active.
            */
            if ( !err.classList.contains('active') ) { 
                err.classList.add('active');

                SCROLL = false;
            }
            break;
    }
});