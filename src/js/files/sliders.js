/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs, EffectFade, Pagination, FreeMode } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.swiper')) {
		var productSlider = new Swiper('.product__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs, EffectFade],
			effect: 'fade',
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			thumbs: {
          swiper: new Swiper('.thumbs', {
						modules: [Navigation, Pagination, FreeMode],
						slidesPerView: 'auto',
						spaceBetween: 10,
						// breakpoints: {
						// 	320: {
						// 		spaceBetween: 20,
						// 		direction: 'horizontal',
						// 	},
						// 	768: {
						// 		direction: 'vertical',
						// 		spaceBetween: 40,
						// 	},
						// }
						navigation: {
							nextEl: '.thumbs__next',
						},
						freeMode: true,
						// pagination: {
						// 	el: '.thumbs__pagination',
						// 	type: 'fraction',
						// },
						clickable: true,
					}),
        },
			on: {

			}
		});

		if (document.documentElement.clientWidth <= 979) {
			new Swiper('.similars__slider ', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [FreeMode],
				observer: true,
				freeMode: true,
				observeParents: true,
				slidesPerView: 'auto',
				spaceBetween: 20,
				// autoHeight: true,
				speed: 800,
				on: {

					}
			});
		}
	}

	function change(){
		var thumbsPagination = document.querySelector('.thumbs__pagination');
		thumbsPagination.innerHTML =  'Фото ' + (productSlider.realIndex +  1) + ' из ' + (productSlider.slides.length);
	}

	change();
	const thumbsSlides = document.querySelectorAll('.thumbs__slide');

	if (thumbsSlides) {
		thumbsSlides.forEach(el => {
			el.addEventListener('click', change);
		}); 
	}
	
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});