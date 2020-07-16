import Loading from "./lib/Loading";
import Cookie from "./lib/Cookie";
import MoveElement from "./lib/MoveElement"

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
	}else{
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
}

//Click croll down in banner
function bannerCrollDown(){
	$('.crolldown').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
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
				//alert('finished');
			}

		});
	});
}


//Slide product home
function productHomeSlide() {
	var swiper = new Swiper('.product-home', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
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
	})
}

//Slide phần mềm NX
function nxSile() {
	var mySwiper = new Swiper('.nx-software', {
		speed: 1000,
		navigation: {
			nextEl: '.nx-software .swiper-button-next',
			prevEl: '.nx-software .swiper-button-prev',
		},
	});
}

function nxPro() {
	var swiper = new Swiper('.nx__pro', {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: '.nx-slide .swiper-button-next',
			prevEl: '.nx-slide .swiper-button-prev',
		},
		breakpoints: {
			991: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},

			480: {
				slidesPerView: 1,
			},
		},
	})
}

function vaxTor() {
	var swiper = new Swiper('.vaxtor-slide .vaxtor__pro', {
		slidesPerView: 3,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: '.vaxtor-slide .swiper-button-next',
			prevEl: '.vaxtor-slide .swiper-button-prev',
		},
		breakpoints: {
			1100: {
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			991: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			375: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
	})
}

function eduSlide() {
	var swiper = new Swiper('.right-partner', {
		slidesPerView: 3,
		spaceBetween: 30,
		slidesPerColumn: 2,
		loop: true,
		speed: 1100,
		autoplay: true,
		spaceBetween: 20,
		navigation: {
			nextEl: '.right-slide .swiper-button-next',
			prevEl: '.right-slide .swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 6,
				spaceBetween: 10,
			},
			578: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			375: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
		},
	})
}

function homeNewSlide() {
	var mySwiper = new Swiper('.new-home__slide', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		speed: 1100,
		speed: 1100,
		autoplay: true,
		navigation: {
			nextEl: '.tbl-home-7__content__list .swiper-button-next',
			prevEl: '.tbl-home-7__content__list .swiper-button-prev',
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			480: {
				slidesPerView: 1,
			}
		},
	});
}

function partnerSlide() {
	var swiper = new Swiper('.block__partner .swiper-container', {
		slidesPerColumn: 2,
		spaceBetween: 20,
		slidesPerView: 6,
		speed: 1000,
		autoplay: false,
		loop: true,
		navigation: {
			nextEl: '.block__partner .swiper-button-next',
			prevEl: '.block__partner .swiper-button-prev',
		},
		breakpoints: {
			1100: {
				slidesPerView: 5,
			},
			1024: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 2,
			}
		},

	});
}

function partnerSlideAbout() {
	var swiper = new Swiper('.partner__slide, .customer__slide', {
		slidesPerView: 6,
		spaceBetween: 20,
		loop: true,
		speed: 1000,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 1,
			}
		},
	})
}

function prizeSlideAbout() {
	var swiper = new Swiper('.block-prize .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: '.block-prize .swiper-button-next',
			prevEl: '.block-prize .swiper-button-prev',
		},
		breakpoints: {
			1400: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 4,
			},
			575: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 2,
			}
		},
	})
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

function solutionOther() {
	var swiper = new Swiper('.solution__other, .product__other', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: '.solution-other .swiper-button-next, .list-product .swiper-button-next',
			prevEl: '.solution-other .swiper-button-prev, .list-product .swiper-button-prev',
		},
		breakpoints: {
			1400: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		},
	})
}

function panelSlide() {
	var swiper = new Swiper('.panel-slide', {
		slidesPerView: 3,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: '.panel__slide .swiper-button-next',
			prevEl: '.panel__slide .swiper-button-prev',
		},
		breakpoints: {
			1400: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		},
	})
}

// Form search
function searchForm() {
	if ($(window).width() <= 992) {
		$('header').each(function() {
			$('.search').click(function() {
				$('.searchbox').slideToggle();
			})
		})
		$(window).scroll(function() {
			if ($(this).scrollTop() > 0) {
				$('.searchbox').slideUp();
			}
		});
	}
}



// Slide product slide
function productDetail() {
	var galleryThumbs = new Swiper(".thumb .gallery-thumbs", {
		direction: 'vertical',
		spaceBetween: 15,
		slidesPerView: 4,
		loop: true,
		freeMode: true,
		centeredSlides: true,
		centeredSlides: true,
		slideToClickedSlide: true,
		breakpoints: {
			1024: {
				direction: 'horizontal',
			},
		},
		navigation: {
			nextEl: '.thumb .swiper-button-next',
			prevEl: '.thumb .swiper-button-prev',
		},
	});
	var galleryTop = new Swiper(".gallery-top", {
		spaceBetween: 20,
		speed: 1500,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		thumbs: {
			swiper: galleryThumbs,
		},
	});
}

//Product Other
function productOther() {
	var swiper = new Swiper('.product__other, .list-product .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: '.list-product .swiper-button-next',
			prevEl: '.list-product .swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		},
	})
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

// Sub menu mobile
function subMenuMobile() {
	if ($(window).width() <= 1024) {
		$('.submenu-toggle').on('click', function(event) {
			var dropDown = $(this).closest('.nav-item').find('.nav-item__dropdownmenu');
			$(this).closest('.nav-item').find('.nav-item__dropdownmenu').addClass('active');
			$(this).closest('.navbar-nav').find('.nav-item__dropdownmenu').not(dropDown).slideUp();
			if ($(this).hasClass('active')) {
				$(this).addClass('active');
			} else {
				$(this).closest('.navbar-nav').find('.submenu-toggle').removeClass('active');
				$(this).removeClass('active');
			}
			dropDown.stop(false, true).slideToggle();
			event.preventDefault();
		});
	}
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

function productFillter() {
	$('.block__filter').find('.filter__icon').on('click', function(e) {
		$('.block__filter').find('ul.nav').toggleClass('active');
		e.preventDefault();
	})
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


$(function() {
	$("#slider-range-min").slider({
		range: "min",
		value: 500000,
		min: 0,
		max: 20000000,
		slide: function(event, ui) {
			$("#amount").val(ui.value +"đ");
		}
	});
	$("#amount").val($("#slider-range-min").slider("value")+"đ");
});
document.addEventListener('DOMContentLoaded', () => {
	// Loading();
	Cookie();
	new WOW().init();
	dnnBannerSlide();
	activeHeaderWhenScroll();
	bannerCrollDown()
	coutingNumber();
	toggleMenuMobile();
	productHomeSlide();
	searchForm();
	nxSile();
	nxPro();
	vaxTor();
	eduSlide();
	homeNewSlide();
	partnerSlide();
	partnerSlideAbout();
	prizeSlideAbout();
	tabsDescription();
	panelSlide();
	solutionOther();
	productDetail();
	productOther();
	listFilter();
	helperCus();
	$('select').niceSelect();
	hideTool();
	subMenuMobile();
	DataBG();
	setBackground();
	productFillter();
	moveSelect();
	moveNav();
});
$(window).resize(function(){
	if ($(window).width() <= 1024) {
		$('.language').appendTo('.header-container #div-mobile');
		$('.search').appendTo('.header-container #div-mobile')
	}else{
		$('.language').appendTo('.nav-item #language-desktop');
		$('.search').appendTo('.nav-item #search-desktop');
	}
})