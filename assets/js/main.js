/**
 * flatAccordions
 * pageLoad
 */

 (function($) {

    "use strict";

    // PreLoad
    let Preloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(500).fadeOut('slow',function(){
                $(this).remove();
            }); 
        });
    };

    // Mobile menu
    $(document).on('click', '.mobile-button', function() {
        $(this).toggleClass('active');
        $('.lists-wrap').slideToggle();
    })

    // Tab
    let Tab = function() {
        $(".menu-tab li").click(function() {
            $(".menu-tab li").removeClass("active").eq($(this).index()).addClass("active");
            $(".content-tab .content-item").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");
    };

    // Scroll Top
    let scrollToTop = function() {
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
        Preloader();
        Tab();
        scrollToTop();
        wowAnimation();
    });

})(jQuery);