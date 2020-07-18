import Loading from "./lib/Loading";
import Cookie from "./lib/Cookie";
import MoveElement from "./lib/MoveElement"

//Toggle menu mobile
const toggleMenuMobile = () => {
	$(".header-container__toggle-menu").on("click", function() {
		$(this).toggleClass("active");
		$(this).siblings(".header-container__main-nav").toggleClass("active");
		$("body").toggleClass("disabled");
	});
};

//Move nav-item
function moveNav() {
	if ($(window).width() <= 1024.98) {
		$('.language').appendTo('.header-container #div-mobile');
		$('.search').appendTo('.header-container #div-mobile')
	} else {
		$('.language').appendTo('.nav-item #language-desktop');
		$('.search').appendTo('.nav-item #search-desktop');
	}
}

//Header when scroll
const activeHeaderWhenScroll = () => {
	const heightHeader = document.querySelector("header").offsetHeight;
	window.addEventListener("scroll", function() {
		if (window.pageYOffset >= heightHeader) {
			document.querySelector("header").classList.add("header-croll-down");
		} else {
			document.querySelector("header").classList.remove("header-croll-down");
		}
	});
};
//Slide apply on site
function dnnBannerSlide() {
	// Home banner
	var swiperhomebanner = new Swiper('.dnn-home-banner__slide', {
		loop: true,
		speed: 1500,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false
		},
		grabCursor: true,
		watchSlidesProgress: true,
		mousewheelControl: true,
		keyboardControl: true,
		navigation: {
			nextEl: ".dnn-home-banner__slide .swiper-button-next",
			prevEl: ".dnn-home-banner__slide .swiper-button-prev",
			type: "bullets",
			clickable: true
		},
		on: {
			progress: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * 0.5;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".swiper-inner").style.transform =
						"translate3d(" + innerTranslate + "px, 0, 0)";
				}
			},
			touchStart: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition: function(speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".swiper-inner").style.transition =
						speed + "ms";
				}
			}
		}

	});
	var swiperhomepro = new Swiper('.dnn-home-3__slide-home-pro .home-pro', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: '.dnn-home-3__slide-home-pro .swiper-button-next',
			prevEl: '.dnn-home-3__slide-home-pro .swiper-button-prev',
		},
		breakpoints: {
			1280: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			}
		},
	});


	//About slide
	var aboutSldie = new Swiper('.dnn-about5__slide', {
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: '.dnn-about5__slide .swiper-button-next',
			prevEl: '.dnn-about5__slide .swiper-button-prev',
		},
	});
	//Slide prodcut detail
	var galleryTop = new Swiper('.dnn-detail1__content__slide .dnn-detail1__content__slide__gallery-top', {
		spaceBetween: 10,
		loop: true,
		loopedSlides: 4
	});
	var galleryThumbs = new Swiper('.thumbs .dnn-detail1__content__slide__gallery-thumbs', {
		spaceBetween: 10,
		centeredSlides: true,
		slidesPerView: '5',
		touchRatio: 0.2,
		slideToClickedSlide: true,
		loop: true,
		loopedSlides: 5,
		navigation: {
			nextEl: '.thumbs .swiper-button-next',
			prevEl: '.thumbs .swiper-button-prev',
		},
	});
	galleryTop.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryTop;
}

//Click croll down in banner
function bannerCrollDown() {
	$('.crolldown').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});
}

//Counting number
function coutingNumber() {
	$('.counter').each(function() {
		var $this = $(this),
			countTo = $this.attr('data-count');
		$({
			countNum: $this.text()
		}).animate({
			countNum: countTo
		}, {
			duration: 3000,
			easing: 'linear',
			step: function() {
				$this.text(Math.floor(this.countNum));
			},
			complete: function() {
				$this.text(this.countNum);
			}

		});
	});
}

function tabsDescription() {
	$('.tabs > li').on('click', function() {
		var $panel = $(this).closest('.tab-panels');
		$panel.find('li.active').removeClass('active');
		$(this).addClass('active');
		var panelToShow = $(this).attr('rel');
		$panel.find('.panel.active').slideUp(300, showNextPanel);

		function showNextPanel() {
			$(this).removeClass('active');
			$('#' + panelToShow).slideDown(300, function() {
				$(this).addClass('active');
			});
		};

	});

}

function listFilter() {
	$('span').click(function(j) {
		var dropDown = $(this).closest('.acc__card').find('.acc__panel');
		$(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.acc__title').removeClass('active');
		} else {
			$('.acc__title').find('span.active').removeClass('active');
			$(this).addClass('active');
			$(this).closest('.acc__card').find('.acc__title').addClass('active');
		}
		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});
	if ($(window).width() <= 1024)
		$('.block__title').find('.acc__mobile').on('click', function(e) {
			$('.content__sidebar').find('.acc').toggleClass('active');
			e.preventDefault();
		});
}

function helperCus() {
	$('.__title').click(function(j) {
		var dropDown = $(this).closest('.acc__card').find('.acc__panel');
		$(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.acc').find('.__title.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});

}


function hideTool() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$("#block__tool").addClass("active");
		} else {
			$("#block__tool").removeClass("active");
		}
	});
}

function DataBG() {
	$('[data-bg]').each(function() {
		$(this).addClass('data-bg lazyload')
	})
}

function setBackground() {
	$("[setBackground]").each(function() {
		var background = $(this).attr("setBackground");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center",
		});
	});
	$("[setBackgroundRepeat]").each(function() {
		var background = $(this).attr("setBackgroundRepeat");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-repeat": "no-repeat",
		});
	});
}

//Move select fillter product
function moveSelect() {
	$('.fillter').appendTo('ul.nav #div');
	$('.fillter').each(function() {
		if (!$(this).text().match(/^\s*$/)) {
			$(this).insertBefore($(this).prev('.nav-item'));
		}
	});
	$('.wrap').appendTo('.content__sidebar #range');
}

//Check banner
const checkLayoutBanner = () => {
	const pagesBanner = $("#page-banner");
	const breadcrumb = $('.global-breadcrumb');
	const heightHeader = $("header").outerHeight();
	if (pagesBanner.length < 1) {
		$("header").css({
			"margin-top": "0",
			"background-color": "#fff"
		});
		breadcrumb.css("padding-top", heightHeader);
	}
};

document.addEventListener('DOMContentLoaded', () => {
	// Loading();
	Cookie();
	new WOW().init();
	dnnBannerSlide();
	activeHeaderWhenScroll();
	bannerCrollDown()
	coutingNumber();
	toggleMenuMobile();
	tabsDescription();
	listFilter();
	helperCus();
	hideTool();
	DataBG();
	setBackground();
	moveSelect();
	moveNav();
	checkLayoutBanner();
});
$(window).resize(function() {
	if ($(window).width() <= 1024) {
		$('.language').appendTo('.header-container #div-mobile');
		$('.search').appendTo('.header-container #div-mobile')
	} else {
		$('.language').appendTo('.nav-item #language-desktop');
		$('.search').appendTo('.nav-item #search-desktop');
	}
})