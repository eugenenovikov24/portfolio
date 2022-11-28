let mobileNavButton = document.querySelector('.mobile-nav-button');
let overlay = document.querySelector('.mobile-nav-overlay');
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
};

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

// Включение мобильной навигации

mobileNavButton.addEventListener('click', function () {
	mobileNavButton.classList.toggle('active');
	overlay.classList.toggle('visible');
	mobileNav.classList.toggle('visible');
	document.body.classList.toggle('no-scroll');

	// Решение проблемы с прыгающим контентом, когда исчезает скролл
	if (calcFullScrollHeight() > window.innerHeight && !isMobile.any()) {
		document.body.classList.toggle('fix-scroll-jump');
	}

});

// Выключение мобильной навигации (клик по overlay)

overlay.addEventListener('click', function () {
	turnOffMobileNav();
});

// Выключение мобильной навигации (клик по ссылке)
mobileNav.querySelectorAll('a').forEach(function (link) {
	link.addEventListener('click', function () {
		turnOffMobileNav();
	});
});

// Функция выключения мобильной навигации
function turnOffMobileNav() {
	// Выключаем иконку
	if (mobileNavButton.classList.contains('active')) {
		mobileNavButton.classList.remove('active');
	}

	// Выключаем оверлей
	if (overlay.classList.contains('visible')) {
		overlay.classList.remove('visible');
	}

	// Выключаем панель с меню
	if (mobileNav.classList.contains('visible')) {
		mobileNav.classList.remove('visible');
	}

	// Выключаем замок на скролл для всей страницы
	if (document.body.classList.contains('no-scroll')) {
		document.body.classList.remove('no-scroll');
	}

	// Выключаем класс fix-scroll-jump
	if (document.body.classList.contains('fix-scroll-jump')) {
		document.body.classList.remove('fix-scroll-jump');
	};
};
