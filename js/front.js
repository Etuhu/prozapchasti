//Появление блоков главного меню и авторизации
let body = document.body;
let bodyFader = body.querySelector(".fader");
let loginButton = document.getElementById("loginBtn");
let loginModule = document.querySelector(".login-wrapper");
let loginCloseButton = document.querySelector(".login-wrapper .close-btn");
let mainMenu = document.querySelector(".main-menu");
let openMenuButton = document.querySelector(".navbar-toggler");
let closeMenuButton = document.querySelector(".main-menu .close-btn");
let headerMenuItems = document.querySelectorAll(".main-menu .navbar-nav .nav-link");


let loginMenuHandler = function () {
    loginModule.classList.toggle("show");
    body.classList.toggle("fixed");
}

loginButton.addEventListener("click", function () {
    loginMenuHandler();
});

loginCloseButton.addEventListener("click", function () {
    loginMenuHandler();
});

let mainMenuHandler = function () {
    mainMenu.classList.toggle("show");
    body.classList.toggle("fixed");
}

openMenuButton.addEventListener("click", function () {
    mainMenuHandler();
});

closeMenuButton.addEventListener("click", function () {
    mainMenuHandler();
});

bodyFader.addEventListener("click", function () {
	if (loginModule.classList.contains("show")) {
		loginMenuHandler();
	}
	if (mainMenu.classList.contains("show")) {
		mainMenuHandler();
	}
});

headerMenuItems.forEach(function(headerMenuItem) {
    headerMenuItem.addEventListener("click", function () {
		mainMenuHandler();
    });
});

//Прилипающая шапка
let header = document.querySelector(".header");
function onWindowScroll() {
	if (window.pageYOffset > header.clientHeight) {
		header.classList.add("fixed-top");
	} else {
		header.classList.remove("fixed-top");
	}
}
window.addEventListener("scroll", onWindowScroll);
window.addEventListener("DOMContentLoaded", onWindowScroll);

//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	autoplay: {
		delay: 5000,
	},
	effect: "fade",
	spaceBetween: 0,
	watchOverflow: true,
	navigation: {
		nextEl: ".promo-swiper-button-next",
		prevEl: ".promo-swiper-button-prev",
	},
	pagination: {
		el: ".promo-swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
});

const saleSwiper = new Swiper(".sale-swiper", {
	slidesPerView: 6,
	slidesPerGroup: 4,
	speed: 700,
	simulateTouch: true,
	autoplay: {
	    delay: 3000,
	},
	spaceBetween: 30,
	watchOverflow: true,
	navigation: {
		nextEl: ".sale-swiper-button-next",
		prevEl: ".sale-swiper-button-prev",
	},
	pagination: {
		el: ".sale-swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		1500: {
			slidesPerView: 6,
			slidesPerGroup: 6,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 5,
			slidesPerGroup: 5,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 4.3,
			slidesPerGroup: 4,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.3,
			slidesPerGroup: 3,
			spaceBetween: 15,
		},
		300: {
			slidesPerView: 2.4,
			slidesPerGroup: 2,
			spaceBetween: 10,
		},
	},
});

const hitSwiper = new Swiper(".hit-swiper", {
	slidesPerView: 6,
	slidesPerGroup: 4,
	speed: 800,
	simulateTouch: true,
	autoplay: {
	    delay: 3500,
	},
	spaceBetween: 30,
	watchOverflow: true,
	navigation: {
		nextEl: ".hit-swiper-button-next",
		prevEl: ".hit-swiper-button-prev",
	},
	pagination: {
		el: ".hit-swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		1500: {
			slidesPerView: 6,
			slidesPerGroup: 6,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 5,
			slidesPerGroup: 5,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 4.3,
			slidesPerGroup: 4,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.3,
			slidesPerGroup: 3,
			spaceBetween: 15,
		},
		300: {
			slidesPerView: 2.4,
			slidesPerGroup: 2,
			spaceBetween: 10,
		},
	},
});