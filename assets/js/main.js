/**
 * flatAccordions
 * pageLoad
 */

 (function($) {

    "use strict";


    // var flatAccordions = function() {
    //     var args = { easing: 'easeOutExpo', duration: 500 };

    //     $('.accordion-item.active').find('.accordion-content').show();
    //     $('.accordion-heading').on('click', function() {
    //         if (!$(this).parent().is('.active')) {
    //             $(this).parent().toggleClass('active')
    //                 .children('.accordion-content').slideToggle(args)
    //                 .parent().siblings('.active').removeClass('active')
    //                 .children('.accordion-content').slideToggle(args);
    //         } else {
    //             $(this).parent().toggleClass('active');
    //             $(this).next().slideToggle(args);
    //         }
    //     });
    // };


    // PreLoad
    let Preloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(500).fadeOut('slow',function(){
                $(this).remove();
            }); 
        });
    };

    // Tab
    let Tab = function() {
        $(".menu-tab li").click(function() {
            $(".menu-tab li").removeClass("active").eq($(this).index()).addClass("active");
            $(".content-tab .content-item").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");
    };

    // Scroll Top
    var scrollToTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 300 ) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 } , 'easeInOutExpo');
        return false;
        });
    }

    // wowAnimation
    let wowAnimation = function () {
        new WOW().init();   
    }

    // Dom Ready
    $(function() {
        // flatAccordions();
        Preloader();
        Tab();
        scrollToTop();
        wowAnimation();
    });

})(jQuery);