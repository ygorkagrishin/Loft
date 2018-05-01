(function () {
    'use strict';
        
    var data = 'data-src',
        images = document.querySelectorAll('[data-src]');
        
    var config = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
    
    if (!('IntersectionObserver' in window)) {
        for (var i=0, len=images.length-1; i<=len; i++) {
            var image = images[i];
    
            preloadImage(image);
        }
    }
    
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(onIntersection, config);
    
        for (var i=0, len=images.length-1; i<=len; i++) {
            var image = images[i];
            observer.observe(image);
        }
    }
    
    function onIntersection(entries) {
        for (var i=0, len=entries.length-1; i<=len; i++) {
            var entry = entries[i];
    
            if (entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                preloadImage(entry.target);
            }
        }
    }
    
    function preloadImage(target) {
        var currentTarget = target,
            currentTargetSrc = currentTarget.getAttribute(data);
    
        currentTarget.style.backgroundImage = 'url('+ currentTargetSrc +')';
    }
    })();
    

    