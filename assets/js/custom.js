

$('.tlt-3').textillate({
	loop: true,
	in: {
		effect: 'bounceIn',
		delayScale: 8,
		sync: false,
		shuffle: false,
		reverse: false,
		sequence: true
	},
	out: {
		effect: 'bounceOut',
		delayScale: 8,
		sync: false,
		shuffle: false,
		reverse: false,
		sequence: true
	},
});


$(window).on("scroll", function () {
    AOS.init();
    AOS.init({disable: 'mobile'});
});



// AOS.init({
//     disable: function () {
//         return window.innerWidth < 991;
//     },
// });

$(".slides_bookplatform").not(".slick-initialized").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
       
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        },
        {
            breakpoint: 540,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
            }
    ]
});


$(".testi-slider").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    
});

$(".testimonial-two").slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    centerPadding: "0px",
    arrows: true,
    responsive: [
        {
            breakpoint: 1370,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
            },
        {
        breakpoint: 999,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});



$(".blogslider-two").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1370,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
            },
        {
        breakpoint: 999,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});

$(".service-blogslider").slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
    centerPadding: "0px",
    centerMode: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1370,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
            },
        {
        breakpoint: 999,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});

$(".teamslider-abt").slick({

    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    responsive: [
        {
            breakpoint: 1370,
            settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 1,
            }
            },
        {
        breakpoint: 999,
        settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 450,
        settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});



$(".our-client-slide").slick({
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    vertical: true,
   
});

$('.menu-Bar').click(function() {
    $(this).toggleClass('open');
    $('.menuWrap').toggleClass('open');
    $('body').toggleClass('ovr-hiddn');
});



$(".dropdown-mm").mouseover(function(){
    $(this).find('a').addClass('is-active');
    $(this).find(".dropdown-menu").addClass('is-active');
 });
 
 $(".dropdown-mm").mouseleave(function(){
    $(this).find('a').removeClass('is-active');
    $(this).find(".dropdown-menu").removeClass('is-active');
 });


 var topnav = $(".topnavs ul").html();
 var submenu = $(".submenu_sec .navbar-nav").html();

 $(".menuWrap ul.menu").append(topnav+submenu);

 $(".books_slides .row").slick({
    slidesToShow: 3,
    autoplay: false,
    dots:true,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1370,
            settings: {
                arrows: false,
                slidesToShow: 3,
            }
            },
        {
        breakpoint: 999,
        settings: {
            arrows: false,
            slidesToShow: 2,
        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 2,
        }
        },
        {
        breakpoint: 450,
        settings: {
            arrows: false,
            slidesToShow: 1,
        }
        }
    ]
   
});


 if ($(window).width() <= 991) {

    $(".premium-ghost .row").slick({
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
       
    });
    
    $(".main-raing").slick({
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        arrows: false,
       
    });

    $(".responsive-sliders").slick({
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        arrows: false,
       
    });


 }


 if ($(window).width() <= 850) {



    $(".our-range-grid").slick({
        slidesToShow: 1,
        autoplay: false,
        dots:true,
        slidesToScroll: 1,
        arrows: false,
       
    });
    

    $(".service-genre .row").slick({
        slidesToShow: 1,
        autoplay: false,
        dots:true,
        slidesToScroll: 1,
        arrows: false,
       
    });



//    $(".dropdown-mm a").click(function() {
//         $(this).next().slideToggle();
//    });




$(".dropdown-mm a.dropdown-toggle").on("click", function(e) {
    e.preventDefault();
    var alreadyActive = $(this).parent().hasClass("active");
    var getParentClass = $(this).parent().attr("class");
    var h = $(this).attr("href");
    $(this).parent().siblings().children("ul,div").slideUp();
    $(this).next().slideToggle();
    w("alreadyActive: " + alreadyActive);
    if (!alreadyActive) {
      $(this).parent().toggleClass("active");
      //showActivePanel(this);
    } else {
      $(this).parent().removeClass("active");
    }
    //w(h);
  });


 }


 
$("[data-targetit]").on("click", function (e) {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var target = $(this).data("targetit");
    $("." + target)
        .siblings('[class^="box-"]')
        .hide();
    $("." + target).fadeIn();
    $(".package_slider .row").slick("setPosition");
    $(".books_slides .row").slick("setPosition");
});



 


 
//  $(".dropdown-menu").mouseover(function(){
//     $(".dropdown-menu").addClass('is-active');
//  });
 
//  $(".dropdown-menu").mouseleave(function(){
//     $(".dropdown-menu").removeClass('is-active');
//  });



var widthcal = $(".side-bars-1 .popup-form-wrap").width();
var minuswidth = -widthcal;

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".side-bars-1").css("display", "block");
        $(".side-bars-1").css("right", minuswidth);
    } else {
        $(".side-bars-1").css("display", "none")
    }
});


var temp = true;
$(".requestbar").click(function() {
    if (temp) {
        $('.side-bars-1').css({
            "right": minuswidth
        });
        $('.black-layout').css({
            "display": "none"
        });
        temp = !temp;
    } else {
        $('.side-bars-1').css({
            "right": "0"
        });
        $('.black-layout').css({
            "display": "block"
        });
        temp = !temp;
    }

});

$(".black-layout").click(function() {
    $('.side-bars-1').css({
        "right": minuswidth
    });
    $('.black-layout').css({
        "display": "none"
    });
});

$('.popupExit_form_wrap, .bnr_form_box').keypress(
    function(event) {
        if (event.which == '13') {
            event.preventDefault();
        }
    });
