/**
 * flatAccordions
 * pageLoad
 */

 (function($) {

    "use strict";


    var flatAccordions = function() {
        var args = { easing: 'easeOutExpo', duration: 500 };

        $('.accordion-item.active').find('.accordion-content').show();
        $('.accordion-heading').on('click', function() {
            if (!$(this).parent().is('.active')) {
                $(this).parent().toggleClass('active')
                    .children('.accordion-content').slideToggle(args)
                    .parent().siblings('.active').removeClass('active')
                    .children('.accordion-content').slideToggle(args);
            } else {
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };


    // PreLoad
    var Preloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(500).fadeOut('slow',function(){
                $(this).remove();
            }); 
        });
    };

    // Dom Ready
    $(function() {
        flatAccordions();
        Preloader();
    });

})(jQuery);