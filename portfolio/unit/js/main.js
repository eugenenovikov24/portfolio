const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
});


const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(function (item) {
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('nav--active');
	});
});


const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', function (event) {
	if (!searchForm.classList.contains('search--visible')) {
		event.preventDefault();
		searchForm.classList.add('search--visible');
	};
});