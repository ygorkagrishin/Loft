window.addEventListener('orientationchange', function() {
    var orientation = window.orientation,
    	err = document.querySelector('.landscape');

    switch(orientation) {
        case 0:
            /* 
                Если не произошло поворота устройства или 
                устройство вернулось в исходную точку в 0 градусов, 
                у элемента удаляется класс active.
            */
            if ( err.classList.contains('active') ) {
                err.classList.remove('active');
            }
            break; 
        case 90:
        	/* 
                Если происходит поворот устройства на 90 градусов, 
                элементу устанавливается класс active.
            */
            if ( !err.classList.contains('active') ) {
                err.classList.add('active');
            }
            break;
        case -90: 
            /* 
                Если происходит поворот устройства на -90 градусов, 
                элементу устанавливается класс active.
            */
            if ( !err.classList.contains('active') ) { 
                err.classList.add('active');
            }
            break;
    }
});