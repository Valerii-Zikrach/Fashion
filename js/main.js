$(document).ready(function () {
	var swiperTop = new Swiper('.swiper-container-top', {
		loop: true,
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		on: {
			init() {
				this.el.addEventListener('mouseenter', () => {
					this.autoplay.stop();
				});

				this.el.addEventListener('mouseleave', () => {
					this.autoplay.start();
				});
			}
		},
	});
	var swiperBottom = new Swiper('.swiper-container-bottom', {
		slidesPerView: 6,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		on: {
			init() {
				this.el.addEventListener('mouseenter', () => {
					this.autoplay.stop();
				});

				this.el.addEventListener('mouseleave', () => {
					this.autoplay.start();
				});
			}
		},
		breakpoints: {
			318: {
				slidesPerView: 1,
			},
			460: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 5
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 15
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 20
			}
		}
	});

	$('.header-btn').on('click', function () {
		$('.header__menu').slideToggle();
	});
	$('.header-btn').on('click', function () {
		$(this).toggleClass('active');
	});

});