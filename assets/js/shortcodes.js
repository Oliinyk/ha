/**
 * flatSpacer
 * flatOwl
 * flatGallery
 * flatImage
 * inViewport
 * searchIcon
 * flatAccordions
 * flatProgressBar
 * flatCounter
 * Parallax
 * pageLoad
 */

(function($) {

    "use strict";

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var flatSpacer = function() {
        $(window).on('load resize', function() {
            var mode = 'desktop';
            if (matchMedia('only screen and (max-width: 991px)').matches)
                mode = 'mobile';
            if (matchMedia('only screen and (max-width: 767px)').matches)
                mode = 'smobile';
            $('.themesflat-spacer').each(function() {
                if (mode === 'desktop') {
                    $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
                } else if (mode == 'mobile') {
                    $(this).attr('style', 'height:' + $(this).data('mobile') + 'px')
                } else {
                    $(this).attr('style', 'height:' + $(this).data('smobile') + 'px')
                }
            });
        });
    };

    var Parallax = function() {
        if ($().parallax && isMobile.any() == null) {
            $('.parallax-1').parallax("50%", 0.1);
            $('.parallax-3').parallax("50%", 0.1);
            $('.parallax-4').parallax("50%", 0.1);
        }
    };


    var flatOwl = function() {
        if ($().owlCarousel) {
            $('.themesflat-carousel-box').each(function() {
                var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    stagePadding: 10,
                    margin: gap,
                    nav: true,
                    navigation: true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: item3
                        },
                        600: {
                            items: item2
                        },
                        1000: {
                            items: item
                        }
                    }
                });
            });
        }
    };

    var flatIcon = function() {
        if ($().owlCarousel) {
            $('.themesflat-carousel-box-style-2').each(function() {
                var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    stagePadding: 10,
                    margin: gap,
                    nav: true,
                    navigation: true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: item3
                        },
                        600: {
                            items: item2
                        },
                        1200: {
                            items: item
                        }
                    }
                });
            });
        }
    };

    var flatGallery = function() {
        if ($().owlCarousel) {
            $('.themesflat-carousel-box-style-3').each(function() {
                var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: true,
                    thumb: true,
                    thumbImage: true,
                    navigation: true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: item3
                        },
                        600: {
                            items: item2
                        },
                        1000: {
                            items: item
                        }
                    }
                });
            });
        }
    };

    var flatImage = function() {
        if ($().owlCarousel) {
            $('.themesflat-carousel-blog').each(function() {
                var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: true,
                    thumb: true,
                    thumbImage: true,
                    navigation: true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: item3
                        },
                        600: {
                            items: item2
                        },
                        1000: {
                            items: item
                        }
                    }
                });
            });
        }
    };

    var flatGalleryImg = function() {
        if ($().owlCarousel) {
            $('.themesflat-carousel-img').each(function() {
                var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: true,
                    thumb: true,
                    thumbImage: true,
                    navigation: true,
                    pagination: true,
                    loop: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: item3
                        },
                        600: {
                            items: item2
                        },
                        1000: {
                            items: item
                        }
                    }
                });
            });
        }
    };
    var inViewport = function() {
        $('[data-inviewport="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };

    var searchIcon = function() {
        $(document).on('click', function(e) {
            var clickID = e.target.id;
            if ((clickID !== 'input-search')) {
                $('.header-search-form').removeClass('show');
            }
        });

        $('.header-search-icon').on('click', function(event) {
            event.stopPropagation();
        });

        $('.header-search-form').on('click', function(event) {
            event.stopPropagation();
        });

        $('.header-search-icon').on('click', function(event) {
            if (!$('.header-search-form').hasClass("show")) {
                $('.header-search-form').addClass('show');
                event.preventDefault();
            } else
                $('.header-search-form').removeClass('show');
            event.preventDefault();

        });

    };

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

    var flatProgressBar = function() {
        if ($().waypoint) {
            $('.progress-bg').on('on-appear', function() {
                $(this).each(function() {
                    var percent = parseInt($(this).data('percent'));

                    $(this).find('.progress-animate').animate({
                        "width": percent + '%'
                    }, 1000, "easeInCirc");

                    $(this).parent('.themesflat-progress').find('.perc').addClass('show').animate({
                        "width": percent + '%'
                    }, 1000, "easeInCirc");
                });
            });
        }
    };

    var flatCounter = function() {
        if ($(document.body).hasClass('counter-scroll')) {
            var a = 0;
                $(window).scroll(function() {
                var oTop = $('.fixmo-group').offset().top - window.innerHeight;
                    if (a === 0 && $(window).scrollTop() > oTop) {
                        if ( $().countTo ) {
                            $('.fixmo-group').find('.number').each(function() {
                                var to = $(this).data('to'),
                                    speed = $(this).data('speed');
                              
                                $(this).countTo({
                                    to: to,
                                    speed: speed
                                });
                            });
                        }
                    a = 1;
                }
            });
        }
    };

    var wowAnimation = function () {
        new WOW().init();   
    }

    var faqEvent = function() { 
        const faqs = document.querySelectorAll(".item-faq");
        faqs.forEach(faq => {
            faq.addEventListener("click", () => {
                if (faq.classList.contains("active")) {
                    faq.classList.remove("active");
                } else {
                    document.querySelectorAll(".item-faq").forEach(
                        faq => {
                            faq.classList.remove("active");
                        }
                    )
                    faq.classList.add("active");
                }
            });
        });
     }


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
        flatSpacer();
        flatGallery();
        flatImage();
        flatIcon();
        flatGalleryImg();
        searchIcon();
        flatAccordions();
        flatProgressBar();
        flatCounter();
        wowAnimation();
        faqEvent();
        $(window).on('load',function(){
            Parallax();
            flatOwl();
            inViewport();
        });
        Preloader();
    });

})(jQuery);