var ajax = ( function () {

$('#js-form').on('submit', function (e) {
    e.preventDefault();

    var self = $(this),
        url = self.attr('action'),
        method = self.attr('method'),
        data = self.serialize();

    $.ajax({
        type: method,
        url: url,
        data: data,
        success: function(){
            self.trigger('reset');
            
            var module = $('.form__answer'),
                close = $('.form__answer-close');

            if (!module.hasClass('active')) 
                module.addClass('active');

            console.log(self)
            close.on('click', function (e) {
                e.preventDefault();

                if (module.hasClass('active')) 
                    module.removeClass('active');
                
                close.off();
            });
        }      
    });
});

})();