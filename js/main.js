/*
------------------------------------------------------------------------------------------
* Template Name    : Yuktto | Bootstrap 4 HTML5 Multi Purpose One/Multi Pages Template   *
* Author           : Vrishank Softtech                                  				 *
* Version          : 1.0.0                                              				 *
* File Description : Main Js file of the template                      				 *
*-----------------------------------------------------------------------------------------
*/
$(document).ready(function () {
    "use strict";

    /*----TESTIMONIAL SLIDER-----*/
    (function ($) {
        var testimonialCarousel = $('.client-slider');
        if (testimonialCarousel.length > 0) {
            testimonialCarousel.owlCarousel({
                margin: 0,
                loop: false,
                nav: false,
                center: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                items: 3,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }
            });
        }
    })(jQuery);
	
	/*----DROPDOWN HOVER JS-----
    (function ($) {
		var viewPortWidth = jQuery(window).width();
        if (viewPortWidth > 991) 
		{
			$(".dropdown").on('mouseover', function () {
				$('.dropdown-menu', this).stop(true, true).fadeIn("fast");
				$(this).addClass('open');
			});
			$(".dropdown").on('mouseleave', function () {
				$('.dropdown-menu', this).stop(true, true).fadeOut("fast");
				$(this).removeClass('open');
			});
		}
	})(jQuery);*/

    /*----PARALLAX IMAGE-----*/
    (function ($) {
        var length = $('.parallax-box').length;
        if (length >= 1) {
            $('.parallax-box').parallax({ imageSrc: 'images/parallax.jpg' });
        }
    })(jQuery);

    /*----ACCORDIAN JS-----*/
    (function ($) {
        $(".question-card").on('click', function () {
            if ($(this).hasClass('active')) {
                $('.question-card').removeClass('active');
                $(this).removeClass('active')
            } else {
                $('.question-card').removeClass('active');
                $(this).addClass('active')
            }
        });
    })(jQuery);
	
	/*----Porfolio isotope and filter-----*/
	  (function ($) {
		   var length = $('.portfolio-container').length;
        if (length >= 1) {
		var portfolioIsotope = $('.portfolio-container').isotope({
		  itemSelector: '.portfolio-item',
		  layoutMode: 'fitRows'
		});

		$('#portfolio-flters li').on('click', function() {
		  $("#portfolio-flters li").removeClass('filter-active');
		  $(this).addClass('filter-active');

		  portfolioIsotope.isotope({
			filter: $(this).data('filter')
		  });
		});
		}
	  })(jQuery);
	  
	  /*----MAGNIFIC POPUP JS-----*/
	  (function ($) {
			if (('.portfolio-container').length > 0) {
				$('.portfolio-container').each(function () {
					$(this).magnificPopup({
						delegate: '.js-zoom-gallery',
						type: 'image',
						gallery: {
							enabled: true
						}
					});
				});
			}
	  })(jQuery);


});

/*----ONSCROLL JS-----*/
$(window).on("scroll", function () {
    "use strict";

    /*----COUNTER JS-----*/
    var a = 0;
    (function ($) {
        var length = $('#counter').length;
        if (length >= 1) {
		var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
            });
            a = 1;
        }
		}
    })(jQuery);

    var sections = $('section'),
        nav = $('.navbar-nav'),
        nav_height = nav.outerHeight() + 25,
        win_scroll_top = $(window).scrollTop();
    win_scroll_top >= 20 ? $("nav").addClass("sticky-header") : $(".sticky").removeClass("sticky-header");
    win_scroll_top > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
    /*----ON SCROLL CHANGE ACTIVE MENU-----*/
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('li').removeClass('active');
            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
        }
    });
}), $(".menu-close-btn").on("click", function () {
    $('.navbar-collapse').removeClass('show');
}), $(".custom-nav .nav-item a").on("click", function (o) {
    var t = $(this);
    $('.nav-item').removeClass('active');
    $(t).parent().addClass('active');
    $("html, body").stop().animate({
        scrollTop: $(t.attr("href")).offset().top - 50
    }, 1500, "easeInOutExpo"), o.preventDefault()
}), $(document).on("click", ".navbar-collapse.show", function (o) {
    $(o.target).is("a") && $(this).collapse("hide")
}), $(".back_top").on("click", function () {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3), !1
});

/*----OTHER LINK JS-----*/
(function ($) {
    "use strict";
    $(".scroll-next, .contact_btn a").on("click", function (event) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 50
        }, 2000, "easeInOutExpo"), event.preventDefault()
    })
})(jQuery);
