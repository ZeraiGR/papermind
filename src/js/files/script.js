// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

export function headerFixed() {
    const header = document.querySelector('.header'),
        windowHeight = document.documentElement.clientHeight,
        arrowTopBtn = document.querySelector('.arrow-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > windowHeight) {
            header.classList.add('fixed');
            arrowTopBtn.classList.add('active');
        } else {
            header.classList.remove('fixed');
            arrowTopBtn.classList.remove('active');
        }
    });
}

export function searchBtnHandler() {
	const searchBtn = document.querySelector('.header__link--search'),
	searchForm = document.querySelector('.header__link-search .header__search');

	if (searchBtn) {
		searchBtn.addEventListener('click', () => {
			searchForm.classList.add('open');
		});

		window.addEventListener('click', (e) => {
			let target = e.target;

			console.log(target);
			console.log(!target.matches('.header__search-input'));
			if (!target.matches('.header__link--search') && !target.matches('.header__search-input')) {
				searchForm.classList.remove('open');
			}
		});
	}
}