/* Header */

let mobileNavIcon = document.querySelector('.nav-icon');
let overlay = document.querySelector('.overlay');
let mobileNav = document.querySelector('.mobile-nav');

function calcFullScrollHeight() {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	);
}

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};


mobileNavIcon.addEventListener('click', function () {
	// Анимация кнопки
	this.classList.toggle('active');
	// Анимация оверлея
	overlay.classList.toggle('visible');
	// Анимация появления навигации
	mobileNav.classList.toggle('visible');
	// Запрет скролла внутри страницы
	document.body.classList.toggle('no-scroll');

	if ( calcFullScrollHeight() > window.innerHeight && !isMobile.any()) {
		document.body.classList.toggle('fix-scroll-jump');
	}
});

// Закрытие моб навигации при клике на overlay
overlay.addEventListener('click', function () {
	turnOffMobileNav();
});

// Закрытие моб навигации при клике на ссылки внутрии нее
mobileNav.querySelectorAll('a').forEach(function (link) {
	link.addEventListener('click', function () {
		turnOffMobileNav();
	});
});

// Функция выключения мобильной навигации
function turnOffMobileNav() {
	// Выкл. иконку
	if (mobileNavIcon.classList.contains('active')) {
		mobileNavIcon.classList.remove('active');
	};

	// Выкл. оверлей
	if (overlay.classList.contains('visible')) {
		overlay.classList.remove('visible');
	};

	// Выкл. панель с меню
	if (mobileNav.classList.contains('visible')) {
		mobileNav.classList.remove('visible');
	};

	// Выкл. замок на скролл для всей страницы
	if (document.body.classList.contains('no-scroll')) {
		document.body.classList.remove('no-scroll');
	};

	// Выкл. класс fix-scroll-jump
	if (document.body.classList.contains('fix-scroll-jump')) {
		document.body.classList.remove('fix-scroll-jump');
	};
}

/* Модальное окно */

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки "Открыть модальное окно"

modalButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');

        // Запрет на передачу кликов "родителю" модального окна
        modal.querySelector('.modal-window').addEventListener('click', function(event) {
            event.stopPropagation();
        });

		document.body.classList.toggle('no-scroll');

		if ( calcFullScrollHeight() > window.innerHeight && !isMobile.any()) {
			document.body.classList.toggle('fix-scroll-jump');
		}
    });
});

// Закрытие по кнопке "Закрыть"

modalCloseButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        const modal = this.closest('[data-modal]');
		modal.querySelector('form').submit();
        modal.classList.add('hidden');

		if (document.body.classList.contains('no-scroll')) {
			document.body.classList.remove('no-scroll');
		};

		if (document.body.classList.contains('fix-scroll-jump')) {
			document.body.classList.remove('fix-scroll-jump');
		};
    });
});

// Закрытие по фейду

allModals.forEach(function(item) {
    item.addEventListener('click', function() {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');

		if (document.body.classList.contains('no-scroll')) {
			document.body.classList.remove('no-scroll');
		};

		if (document.body.classList.contains('fix-scroll-jump')) {
			document.body.classList.remove('fix-scroll-jump');
		};
    });
});


/* Section Count */

const btnObjectCategory = document.querySelectorAll('#object-type .button-category');
const btnRepairCategory = document.querySelectorAll('#repair-type .button-category');
const rangeLine = document.querySelector('.count-form__range-line');
const rangeValue = document.querySelector('.count-form__range-value');

btnObjectCategory.forEach(function(item) {
    item.addEventListener('click', function() {
        
        btnObjectCategory.forEach(function(item) {
            item.classList.remove('choice');
        });

        this.classList.add('choice');
    });
});

btnRepairCategory.forEach(function(item) {
    item.addEventListener('click', function() {
        
        btnRepairCategory.forEach(function(item) {
            item.classList.remove('choice');
        });

        this.classList.add('choice');
    });
});

// rangeLine.addEventListener('input', function() {
//     rangeValue.textContent = this.value;
// });


/* Section FAQs */

const openCloseButtons = document.querySelectorAll('.section-faqs-accordion-item__button');

openCloseButtons.forEach(function (item) {
    item.addEventListener('click', function() {
        if (!this.classList.contains('opening-state')) {
            this.classList.add('opening-state');
            const answer = this.previousElementSibling.querySelector('.section-faqs-accordion-item__answer');
            answer.classList.remove('none');
        } else {
            this.classList.remove('opening-state');
            const answer = this.previousElementSibling.querySelector('.section-faqs-accordion-item__answer');
            answer.classList.add('none');
        } 
    });
});